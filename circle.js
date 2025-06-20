import Shape2D from "./shape2d.js";

export default class Circle extends Shape2D {
    constructor() {
        super()
        this.radius = 10
    }

    _drawShape(buffer) {
        buffer.circle(0, 0, this.radius * 2)
    }
}