export default class Render {
    static buffers = []

    static showBuffers() {
        for (let i = 0; i < Render.buffers.length; i++) {
            if (Render.buffers[i] !== undefined) {
                image(Render.buffers[i], 0, 0)
            }
        }
    }

    static getBuffer(zIndex) {
        if (zIndex < 0) {
            console.error("Invalid zIndex: " + zIndex)
            zIndex = 0
        }
        if (Render.buffers[zIndex] === undefined) {
            Render.buffers[zIndex] = createGraphics(width, height)
        }
        return Render.buffers[zIndex]
    }

    static clearBuffers() {
        for (let i = 0; i < Render.buffers.length; i++) {
            if (Render.buffers[i] !== undefined) {
                Render.buffers[i].remove()
                Render.buffers[i] = undefined
            }
        }
    }
}