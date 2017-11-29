// bia v0.0.0
function createElement(tag) {
    return document.createElement(tag);
}

function replaceNode(target, node) {
    target.replaceWith(node);
}

function noop() {}

function fragment24(vm) {
    var root, text;

    return {
        c: function create() {
            root = createElement('div');
            root.textContent = '4';
            vm.$el = root;
        },
        h: noop,
        m: function mount(target) {
            replaceNode(target, root);
        }
    };
}

function NodeWithTextExpression(options) {
    this.$fragment = fragment24(this);

    if (options.el) {
        this.$fragment.c();
        this.$fragment.m(options.el);
    }
}

export default NodeWithTextExpression;