import { runScene } from "/engine/main.js"

export default class ProjectSettings {
    static settings = null

    static async loadSettings() {
        await fetch("projectSettings.json", {
            headers: {
                'Concept-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            ProjectSettings.settings = data
        });
        await runScene()
    }
}