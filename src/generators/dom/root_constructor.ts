import { 
    JsCode,
    JsFunction,
    JsIf,
} from '../classes/index';

import { createFragment } from './fragment/fragment';
import uniqueId from '../../utils/unique_id';

export default function(parsedSource, options) {
    return new JsCode({
        content: [
            // define our fragment constructor
            createFragment('create_root_fragment', parsedSource.template),
            null,
            
            new JsFunction({
                id: 'rootFn',
                name: options.name,
                signature: ['options'],
                content: [
                    // define this component's fragment
                    `this.$fragment = create_root_fragment(this);`,
                    null,
                    mountIfStatement(),
                ],
            }),
        ],
    });
};

/**
 * If an "el" property was provided, mount the component on instantiation.
 * 
 * @return  {JsIf}
 */
function mountIfStatement() {
    return new JsIf({
        id: 'rootFnMountIfStatement',
        condition: 'options.el',
        content: [
            `this.$fragment.c();`, // <- create the component instance
            `this.$fragment.m(options.el);`, // <- mount it to our target el
        ],
    });
}
