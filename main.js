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
    console.log(frameRate())
    let delta = deltaTime/1000
    background(220);
    tree.root.propagateProcess(delta)
    tree.root.propagateDraw()
    //noLoop()
}

export function runScene(defaultScene) {
    
    tree = new Tree(defaultScene)

    window.setup = setup
    window.draw = draw

}
