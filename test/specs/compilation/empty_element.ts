import { compile, expect, render } from '../../utils';

it('empty_element', function() {
    const source = `
        <template>
            <div></div>
        </template>
    `;

    const options = {};

    // const output = compile(source, options);
    // console.log(output);

    const vm = render(source, options);
    expect(vm.$el.outerHTML).to.equal('<div></div>');
});