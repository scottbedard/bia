// bia v0.0.0
function createElement(tag) {
    return document.createElement(tag);
}

function replaceNode(target, node) {
    target.replaceWith(node);
}

function noop() {}

function fragment18(vm, state) {
    var root;

    return {
        c: function create() {
            root = createElement('div');

            this.h();
            vm.$el = root;
        },
        h: function hydrate() {

        },
        m: function mount(target) {
            replaceNode(target, root);
        }
    };
}

function NodeWithDirective(options) {
    this.$fragment = fragment18(this);

    if (options.el) {
        this.$fragment.c();
        this.$fragment.m(options.el);
    }
}

export default NodeWithDirective;