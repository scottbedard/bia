// bia v0.0.0
function createElement(tag) {
    return document.createElement(tag);
}

function replaceNode(target, node) {
    target.replaceWith(node);
}

function noop() {}

function fragment0(vm, state) {
    var root;

    return {
        c: function create() {
            root = createElement('div');
            vm.$el = root;
        },
        h: noop,
        m: function mount(target) {
            replaceNode(target, root);
        }
    };
}

function EmptyNode(options) {
    this.$fragment = fragment0(this);

    if (options.el) {
        this.$fragment.c();
        this.$fragment.m(options.el);
    }
}

export default EmptyNode;