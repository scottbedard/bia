import { compile, div, expect, render } from '../../../utils';

export default function(file) {
    it.skip('element_with_static_classes', () => {
        // const { code } = compile(file);
        // console.log(code);

        const vm = render(file, { el: div() });
        expect(vm.$el.outerHTML).to.equal('<div><p class="bar"></p><p>\n            <span class="foo"></span>\n        </p></div>');
    });
}