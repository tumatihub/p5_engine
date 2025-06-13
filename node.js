export default class Node {
    constructor(name) {
        this.name = name
        this.parent = null
        this.children = []
    }

    propagateEnterTree() {
        this._enterTree()
        this.children.forEach(child => {
            child.propagateEnterTree()
        });
    }

    propagateReady() {
        this.children.forEach(child => {
            child.propagateReady()
        });
        this._ready()
    }

    propagateProcess(delta) {
        this._process(delta)
        this.children.forEach(child => {
            child.propagateProcess(delta)
        });
    }

    addChild(node) {
        this.children.push(node)
        node.parent = this
    }

    _enterTree() {}

    _ready() {}

    _process(delta) {}

}