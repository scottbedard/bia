// bia v0.0.0
function setText(el, text) {
    el.textContent = text;
}

function createElement(tag) {
    return document.createElement(tag);
}

function noop() {}

function create_main_fragment(vm) {
    let div;

    return {
        c: function create() {
            div = createElement('div');
            setText(div, 'Foo\'s \"bar\"');
            
            vm.$el = div;
        },
        d: noop,
        h: noop,
        m: noop,
        p: noop,
        u: noop
    };
}

function NodeWithQuotedText(options) {
    this.$fragment = create_main_fragment(this);
    
    if (options.el) {
        this.$fragment.c();
        this.$fragment.m(options.el);
    }
}

export default NodeWithQuotedText;