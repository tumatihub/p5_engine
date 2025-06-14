import Node from "./node.js"

export default class Tree {
    constructor(defaultScene) {
        this.scene = defaultScene
        this.root = null
    }

    addScene(scene) {
        this.scene = scene
        this.root = new Node('root')
        this.root.addChild(this.scene.root)
    }
}
