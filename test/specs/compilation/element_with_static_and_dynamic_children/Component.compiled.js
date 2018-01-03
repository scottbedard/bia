// bia v0.0.0

function init(vm, options) {
    vm.$options = options;
    
    // foo
}

function Watcher(getter, cb) {
    this.getter = getter;
    this.cb = cb;
    this.value = this.get();
    this.cb(this.value, null);
}

Watcher.prototype.addDep = function (dep) {
    dep.addSub(this);
};

Watcher.prototype.get = function () {
    pushTarget(this);
    var value = this.getter();
    popTarget();
    return value;
};

Watcher.prototype.update = function () {
    const value = this.get();
    const oldValue = this.value;
    this.value = value;
    this.cb(value, oldValue);
};

function Dep() {
    this.subs = new Set();
}

Dep.prototype.addSub = function () {
    this.subs.add(sub);
};

Dep.prototype.depend = function () {
    if (Dep.target) {
        Dep.target.addDep(this);
    }
};

Dep.prototype.notify = function () {
    this.subs.forEach(sub => sub.update());
};

Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
    if (Dep.target) targetStack.push(Dep.target);
    Dep.target = _target
}

function popTarget() {
    Dep.target = targetStack.pop();
}

function appendNode(node, target) {
    target.appendChild(node);
}

function setText(el, text) {
    el.textContent = text;
}

function detachNode(node) {
    node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
    target.insertBefore(node, anchor);
}

function createElement(tag) {
    return document.createElement(tag);
}

function noop() {}

function create_main_fragment(vm) {
    var div, p, p_1;

    var if_block = (true) && create_if_block(vm);
    return {
        c: function create() {
            div = createElement('div');
            p = createElement('p');
            setText(p, 'static 1');
            if (if_block) if_block.c();
            p_1 = createElement('p');
            setText(p_1, 'static 2');
            return div;
        },
        d: noop,
        h: noop,
        m: function mount(target, anchor) {
            insertNode(div, target, anchor);
            appendNode(p, div);
            if (if_block) if_block.m(div, null);
            appendNode(p_1, div);
        },
        p: noop,
        u: function unmount() {
            detachNode(div);
        }
    };
}

function create_if_block(vm) {
    var span;

    return {
        c: function create() {
            span = createElement('span');
            setText(span, 'dynamic');
            return span;
        },
        d: noop,
        h: noop,
        m: function mount(target, anchor) {
            insertNode(span, target, anchor);
        },
        p: noop,
        u: function unmount() {
            detachNode(span);
        }
    };
}

function Component(options) {
    init(this, options);
    const fragment = create_main_fragment(this);
    
    if (options.el) {
        this.$el = fragment.c();
        fragment.m(options.el, options.anchor || null);
    }
}

export default Component;