import Camera2D from "./camera2D.js";
import Render from "./render.js";
import Tree from "./tree.js"

let tree
let canvas

function setup() {
    canvas = createCanvas(1152, 648);
    centerCanvas()
    let camera = new Camera2D("Camera2D")
    camera.activate()
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
    push()
    textSize(20)
    textAlign(LEFT, TOP)
    text(round(frameRate()), 10, 10)
    pop()
}

function centerCanvas() {
    let x = (windowWidth-width)/2
    let y = (windowHeight-height)/2
    canvas.position(x, y)
}

function windowResized() {
    centerCanvas()
}

export function runScene(defaultScene) {
    
    tree = new Tree(defaultScene)

    window.setup = setup
    window.draw = draw
    window.windowResized = windowResized

}
