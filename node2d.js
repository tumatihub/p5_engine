import Node from "./node.js"

export default class Node2D extends Node {
    constructor(name) {
        super(name)
        this.position = createVector(0, 0)
        this.rotation = 0
        this.scale = createVector(1, 1)
    }

    applyTransform(buffer) {
        if (this.parent instanceof Node2D) {
            this.parent.applyTransform(buffer)
        }
        buffer.scale(this.scale)
        buffer.rotate(this.rotation)
        buffer.translate(this.position)
    }
}
