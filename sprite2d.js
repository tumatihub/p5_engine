import Node2D from "./node2d.js";
import Render from "./render.js";

export default class Sprite2D extends Node2D {
    constructor(name) {
        super(name)
        this.texture = null
        this.zIndex = 0
        this.visible = true
        this.offset = createVector()
        this.selfModulate = color("white")
    }

    setTexture(texturePath) {
        this.texture = loadImage(texturePath)
    }

    _draw() {
        if (!this.visible || this.texture === null) return
        let buffer = Render.getBuffer(this.zIndex)
        buffer.push()
        buffer.scale(Render.camera.scale)
        buffer.rotate(Render.camera.rotation)
        buffer.translate(Render.camera.getCornerPosition().x, Render.camera.getCornerPosition().y)
        this.applyTransform(buffer)
        buffer.image(this.texture, this.offset.x, this.offset.y)
        buffer.pop()
    }
}