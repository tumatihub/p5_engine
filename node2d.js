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
        buffer.translate(this.position)
        buffer.rotate(this.rotation)
    }

    globalPosition() {
        let globalPosition = createVector()
        if (this.parent instanceof Node2D) {
            globalPosition.add(this.parent.globalPosition())
            return globalPosition.add(this.position.copy().rotate(this.parent.globalRotation()))    
        }
        return globalPosition.add(this.position)
    }

    globalRotation() {
        if (this.parent instanceof Node2D) {
            return this.parent.globalRotation() + this.rotation
        }
        return this.rotation
    }
}
