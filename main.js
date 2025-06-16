import Render from "./render.js";
import Tree from "./tree.js"

let tree

function setup() {
    createCanvas(1152, 648);
    tree.scene.setupScene()
    tree.addScene(tree.scene)
    tree.root.propagateEnterTree()
    tree.root.propagateReady()
}

function draw() {
    let delta = deltaTime/1000
    background(220);
    tree.root.propagateProcess(delta)
    tree.root.propagateDraw()
    Render.showBuffers()
    Render.clearBuffers()
    debugFrameRate()
    //noLoop()
}

function debugFrameRate() {
    translate(0,0)
    textSize(20)
    textAlign(LEFT, TOP)
    text(round(frameRate()), 10, 10)
}

export function runScene(defaultScene) {
    
    tree = new Tree(defaultScene)

    window.setup = setup
    window.draw = draw

}
