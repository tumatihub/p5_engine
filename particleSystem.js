import Particle from "./particle.js"
export default class ParticleSystem {
    constructor() {
        this.particles = []
        this.enabled = true
        this.onShot = false
        this.burstAmount = 100
        this.interval = 2
        this.timeToLive = 2
        this.cooldown = 0
        this.position = createVector(width/2, height/2)
        this.minSpeed = 50
        this.maxSpeed = 200
        this.velocity
        this.gravity = createVector(0, 100)
        this.startColor = color(255, 0, 0, 255)
        this.endColor = color(100, 100, 100, 0)
        this.minStartSize = 5
        this.maxStartSize = 10
        this.minEndSize = 15
        this.maxEndSize = 15
        this.minAngularSpeed = -PI
        this.maxAngularSpeed = PI
    }

    update(delta) {
        console.log(this.particles.length)
        if (this.cooldown > 0) {
            this.cooldown -= delta
        } else {
            this.cooldown = this.interval
            if (this.enabled){
                this._addBurst()
                if (this.onShot) this.enabled = false
            }
        }
        let idx = 0
        while (idx < this.particles.length) {
            if (this.particles[idx].isDead) {
                this.particles.splice(idx, 1)
                continue
            } else {
                this.particles[idx].update(delta)
            }
            idx++
        }
    }

    show() {
        this.particles.forEach(particle => {
            particle.show()
        });
    }

    _addBurst() {
        for (let i = 0; i < this.burstAmount; i++) {
            let particle = new Particle(this)
            this.particles.push(particle)
        }
    }

}