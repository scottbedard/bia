import { compile, expect, render } from '../../utils';

it.only('empty_element', function() {
    const template = `
        <template>
            <div></div>
        </template>
    `;

    const options = {};

    const output = compile(template, options);
    console.log(output);

    // const vm = render(template, options);

    // console.log(vm);
    // expect(vm.$options.foo).to.equal('bar');
});