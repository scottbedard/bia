export interface CompileOptions {
    fileName: 'string';
    name: 'string';
};

export enum NodeType {
    ELEMENT = 'ELEMENT',
    TEXT = 'TEXT',
    PROCESSING_INSTRUCTION = 'PROCESSING_INSTRUCTION',
    COMMENT = 'COMMENT',
    DOCUMENT = 'DOCUMENT',
    DOCUMENT_TYPE = 'DOCUMENT_TYPE',
    DOCUMENT_FRAGMENT = 'DOCUMENT_FRAGMENT',
};

export interface ParsedNode {
    attributes: any;
    children: Array<any>;
    innerHTML: string;
    tagName: string | null;
    textContent: null | string;
    type: NodeType;
};