// bia v0.0.0
function createElement(tag) {
    return document.createElement(tag);
}

function appendChild(target, el) {
    return target.appendChild(el);
}
function replaceNode(target, node) {
    target.replaceWith(node);
}

function noop() {}

function create_main_fragment(vm) {
    var div;

    return {
        c: function create() {
            div = createElement('div');

            div.innerHTML = '\r\n        <span>hello</span>\r\n    ';

            vm.$el = div;
        },
        h: noop,
        m: function mount(target) {
            appendChild(target, div);
        }
    };
}

function DiscardIndentation(options) {
    this.$fragment = create_main_fragment(this);

    if (options.el) {
        this.$fragment.c();
        this.$fragment.m(options.el);
    }
}

export default DiscardIndentation;