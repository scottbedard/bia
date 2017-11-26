import { create } from '../../../src/index';
import { expect } from 'chai';
const fs = require('fs');
const path = require('path');

describe('compilation', () => {
    let el; 

    // create a new in-memory div for each test
    beforeEach(() => {
        el = document.createElement('div');
    });

    // helper function to compile source code to a component
    let createComponent = (name, options) => {
        const source = fs.readFileSync(path.resolve(__dirname, 'fixtures', name + '.bia'), 'utf8');

        return create(source, options);
    }

    it('EmptyNode', () => {
        const Component = createComponent('EmptyNode', {
            filename: 'EmptyNode.bia',
            name: 'EmptyNode',
        });

        const vm = new Component({ el });

        expect(vm._el.outerHTML).to.equal(`<div></div>`);
    });

    it('NodeWithAttributes', () => {
        const Component = createComponent('NodeWithAttributes', {
            filename: 'NodeWithAttributes.bia',
            name: 'NodeWithAttributes',
        });

        const vm = new Component({ el });

        expect(vm._el.outerHTML).to.equal('<div class="foo" style="color: red;"></div>');
    });

    it('NodeWithChild', () => {
        const Component = createComponent('NodeWithChild', {
            filename: 'NodeWithChild.bia',
            name: 'NodeWithChild',
        });

        const vm = new Component({
            el: document.createElement('div'),
        });

        expect(vm._el.outerHTML).to.equal('<div>\n        <span>Aloha</span>\n    </div>')
    });

    it('NodeWithMultipleLinesOfText', () => {
        const Component = createComponent('NodeWithMultipleLinesOfText', {
            filename: 'NodeWithMultipleLinesOfText.bia',
            name: 'NodeWithMultipleLinesOfText',
        });

        const vm = new Component({ el });

        expect(vm._el.outerHTML).to.equal('<div>\r\n        Hello world\r\n        foo bar baz\r\n    </div>');
    });

    it('NodeWithQuotedText', () => {
        const Component = createComponent('NodeWithQuotedText', {
            filename: 'NodeWithQuotedText.bia',
            name: 'NodeWithQuotedText',
        });

        const vm = new Component ({ el });
        
        expect(vm._el.outerHTML).to.equal('<div>Foo\'s \"bar\"</div>');
    });

    it('NodeWithText', () => {
        const Component = createComponent('NodeWithText', {
            filename: 'NodeWithText.bia',
            name: 'NodeWithText',
        });

        const vm = new Component({ el });

        expect(vm._el.outerHTML).to.equal('<div>Hello world</div>');
    });
});