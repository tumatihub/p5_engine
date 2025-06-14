import Node from "./node.js"

export default class Node2D extends Node {
    constructor(name) {
        super(name)
        this.position = createVector(0, 0)
        this.rotation = 0
        this.scale = createVector(1, 1)
    }

    applyTransform() {
        if (this.parent instanceof Node2D) {
            this.parent.applyTransform()
        }
        translate(this.position)
        rotate(this.rotation)
        scale(this.scale)
    }
}
