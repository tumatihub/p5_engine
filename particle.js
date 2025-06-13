export default class Particle {
    constructor(particleSystem) {
        this.particleSystem = particleSystem
        this.cooldown = particleSystem.timeToLive
        this.isDead = false
        this.velocity = p5.Vector.random2D().setMag(random(particleSystem.minSpeed, particleSystem.maxSpeed))
        this.position = particleSystem.position.copy()
        this.gravity = particleSystem.gravity.copy()
        this.color = particleSystem.startColor
        this.startSize = random(particleSystem.minStartSize, particleSystem.maxStartSize)
        this.size = this.startSize
        this.endSize = random(particleSystem.minEndSize, particleSystem.maxEndSize)
        this.startRotation = random(-PI/4, PI/4)
        this.rotation = this.startRotation
        this.angularSpeed = random(particleSystem.minAngularSpeed, particleSystem.maxAngularSpeed)
    }

    update(delta) {
        if (this.cooldown <= 0) {
            this._destroy()
            return
        } else {
            this.cooldown -= delta
        }
        this._applyForce(p5.Vector.mult(this.gravity, delta))
        this.position.add(p5.Vector.mult(this.velocity, delta))
        this.rotation += this.angularSpeed * delta
    }

    show() {
        let perc = 1-(this.cooldown/this.particleSystem.timeToLive)
        this.color = lerpColor(this.particleSystem.startColor, this.particleSystem.endColor, perc)
        this.size = lerp(this.startSize, this.endSize, perc)
        push()
        translate(this.position.x, this.position.y)
        stroke(this.color)
        fill(this.color)
        rotate(this.rotation)
        beginShape(TRIANGLES)
        vertex(-this.size/2, this.size/2)
        vertex(-this.size/2, -this.size/2)
        vertex(this.size/2, 0)
        endShape()
        //circle(0, 0, this.size)
        //rectMode(CENTER)
        //rect(0, 0, this.size, this.size)
        pop()
    }

    _destroy() {
        this.isDead = true
    }

    _applyForce(force) {
        this.velocity.add(force)
    }
}