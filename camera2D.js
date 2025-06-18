import Node2D from "./node2d.js";
import Render from "./render.js";

export default class Camera2D extends Node2D {
    constructor(name) {
        super(name)
        this.position = createVector(width/2, height/2)
    }
    activate() {
        Render.camera = this
    }

    getCenterPosition() {
        return createVector(this.position.x/this.scale.x, this.position.y/this.scale.y)
    }
    
    getCornerPosition() {
        return p5.Vector.sub(createVector(Render.getViewSize().x/2, Render.getViewSize().y/2), this.position)
    }
}