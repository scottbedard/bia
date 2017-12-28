describe('element with child element and quoted text', () => {
    const file = require('path').resolve(__dirname, 'Component.bia');

    it('renders', () => {
        // const { code } = compile(file);
        const vm = render(file, { el });

        expect(vm.$el.innerHTML.trim()).to.equal(`<span>one "two" 'three'</span>`);
    });
});