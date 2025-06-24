import ProjectSettings from "./projectSettings.js";
import Camera2D from "./camera2D.js";
import Render from "./render.js";
import Tree from "./tree.js"

let tree
let canvas


await ProjectSettings.loadSettings()

function setup() {
    canvas = createCanvas(ProjectSettings.settings.window.width, ProjectSettings.settings.window.height);
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
    background(ProjectSettings.settings.scene.backgroundColor);
    tree.root.propagateProcess(delta)
    tree.root.propagateDraw()
    Render.showBuffers()
    Render.clearBuffers()
    debugFrameRate()
    //noLoop()
}

function debugFrameRate() {
    if (!ProjectSettings.settings.debug.showFrameRate) return
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

export async function runScene() {
    const scene = await import("../"+ProjectSettings.settings.scene.defaultScene)
    tree = new Tree(new scene.default())
    exportFunctions()
    new p5()
}

export function exportFunctions() {
    window.setup = setup
    window.draw = draw
    window.windowResized = windowResized
    
}