export default class Render {
    static buffers = []
    static camera = null

    static showBuffers() {
        push()
        let cameraPositon = createVector()
        if (Render.camera !== null) {
            cameraPositon = Render.camera.getCornerPosition()
        }
        for (let i = 0; i < Render.buffers.length; i++) {
            if (Render.buffers[i] !== undefined) {
                image(Render.buffers[i], 0, 0)
            }
        }
        pop()
    }

    static getBuffer(zIndex) {
        if (zIndex < 0) {
            console.error("Invalid zIndex: " + zIndex)
            zIndex = 0
        }
        if (Render.buffers[zIndex] === undefined) {
            Render.buffers[zIndex] = createGraphics(Render.getViewSize().x, Render.getViewSize().y)
        }
        return Render.buffers[zIndex]
    }

    static clearBuffers() {
        for (let i = 0; i < Render.buffers.length; i++) {
            if (Render.buffers[i] !== undefined) {
                Render.buffers[i].clear()
                Render.buffers[i].resizeCanvas(Render.getViewSize().x, Render.getViewSize().y)
            }
        }
    }

    static getViewSize() {
        if (Render.camera === null) {
            return createVector(width, height)
        } else {
            return createVector(width/Render.camera.scale.x, height/Render.camera.scale.y)
        }
    }
}