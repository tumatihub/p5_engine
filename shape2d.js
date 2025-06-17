import Node2D from "./node2d.js"
import Render from "./render.js"

export default class Shape2D extends Node2D{
    constructor(name) {
        super(name)
        this.fillColor = color(255)
        this.strokeColor = color(50)
        this.strokeWeight = 3
        this.noStroke = false
        this.nofill = false
        this.zIndex = 0
    }

    _draw() {
        let buffer = Render.getBuffer(this.zIndex)
        buffer.push()
        buffer.scale(Render.camera.scale)
        buffer.rotate(Render.camera.rotation)
        buffer.translate(Render.camera.getCornerPosition().x, Render.camera.getCornerPosition().y)
        this.applyTransform(buffer)
        if (this.nofill) {
            buffer.noFill()
        } else {
            buffer.fill(this.fillColor)
        }
        if (this.noStroke) {
            buffer.noStroke()
        } else {
            buffer.stroke(this.strokeColor)
            buffer.strokeWeight(this.strokeWeight)
        }
        this._drawShape(buffer)
        buffer.pop()
    }

    _drawShape(buffer) {}
}
