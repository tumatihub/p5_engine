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
        buffer.translate(this.position)
        buffer.rotate(this.rotation)
        buffer.scale(this.scale)
    }

    globalPosition() {
        let globalPosition = createVector()
        if (this.parent instanceof Node2D) {
            globalPosition.add(this.parent.globalPosition())
            return globalPosition.add(this.position.copy().rotate(this.parent.globalRotation()))    
        }
        return globalPosition.add(this.position)
    }

    setGlobalPosition(position) {
        let parentGlobalPosition = createVector()
        if (this.parent instanceof Node2D) {
            parentGlobalPosition = this.parent.globalPosition()
        }
        this.position = p5.Vector.sub(position, parentGlobalPosition)
    }

    globalRotation() {
        if (this.parent instanceof Node2D) {
            return this.parent.globalRotation() + this.rotation
        }
        return this.rotation
    }
}
