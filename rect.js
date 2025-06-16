import Shape2D from "./shape2d.js";

export default class Rect extends Shape2D {
    constructor(name) {
        super(name)
        this.width = 10
        this.height = 10
    }
    
    _drawShape(buffer) {
        buffer.rect(0, 0, this.width, this.height)
    }
}