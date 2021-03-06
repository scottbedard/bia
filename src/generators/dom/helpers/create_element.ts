import { JsHelper } from '../../code/JsHelper';

/**
 * Create element.
 * 
 * @return {JsFunction}
 */
export default new JsHelper({
    id: 'createElement',
    name: 'createElement',
    signature: ['tag'],
    content: [
        `return document.createElement(tag);`,
    ],
});