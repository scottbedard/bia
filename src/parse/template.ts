const { JSDOM } = require('jsdom');
// const { nodeTypes } = require('../utils/constants');
import { nodeTypes } from '../utils/constants';
import { NodeType, ParsedNode } from '../interfaces';

/**
 * Parse a template.
 * 
 * @param template 
 */
export default function(source: string, options) {
    const { document } = new JSDOM(source).window;
    const templates = document.querySelectorAll('template');

    if (templates.length === 0) {
        throw `Failed to parse ${options.filename}, no template block is defined.`;
    } else if (templates.length > 1) {
        throw `Failed to parse ${options.filename}, only one template block may be defined.`;
    }
    
    const template = document.querySelector('template').content;

    if (template.childElementCount !== 1) {
        throw `Failed to parse ${options.filename}, template must contain exactly one root element.`;
    }

    return createDomTree(template.children[0]);
}

// convert an element to a parsed node tree
function createDomTree(el): ParsedNode {
    const nodeType = nodeTypes[el.nodeType];

    return {
        attributes: getAttributes(el),
        tagName: getTagName(el),
        textContent: getTextContent(el, nodeType),
        type: nodeType,
        children: Array.from(el.childNodes).map(createDomTree),
    };
}

// get the attributes of a node as an object
// <div foo="bar" /> => { foo: 'bar' }
function getAttributes(el): Object {
    return Array.from(el.attributes || []).reduce((attributes, attr) => {
        attributes[attr.name] = attr.value;
        return attributes;
    }, {});
}

// get an element's tagName, or null if there is none
// <div /> => 'div'
function getTagName(el): string | null {
    return el.tagName || null;
}

// get the text content of a node, or null if it's not a text node
function getTextContent(el, nodeType): string | null {
    return nodeType === 'TEXT' ? el.textContent : null;
}