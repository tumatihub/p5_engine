import Node2D from "./node2d.js"

export default class Shape2D extends Node2D{
    constructor(name) {
        super(name)
        this.fillColor = color(255)
        this.strokeColor = color(50)
        this.strokeWeight = 3
        this.noStroke = false
        this.nofill = false
    }

    _draw() {
        push()
        this.applyTransform()
        if (this.nofill) {
            noFill()
        } else {
            fill(this.fillColor)
        }
        if (this.noStroke) {
            noStroke()
        } else {
            stroke(this.strokeColor)
            strokeWeight(this.strokeWeight)
        }
        
        this._drawShape()
        pop()
    }

    _drawShape() {}
}
