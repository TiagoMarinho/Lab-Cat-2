class PhysicsWorld {
	constructor () {
		this.delta = 0
		this.gravity = 3 // should be 9.8 but that's too high with current values for drag and player movement
		this.drag = 0.01

		this.dynamicBodies = []
		this.staticBodies = []
	}
	get bodies () {
		return [...this.dynamicBodies, ...this.staticBodies]
	}
	step () {
		let now = performance.now()
		let delta = now - this.delta
		for (let i = 0; i < this.dynamicBodies.length; ++i) {
			let body = this.dynamicBodies[i]

			if (body.affectedByGravity)
				body.velocity.y += this.gravity

			body.velocity.y /= 1 + this.drag // allows for faster movement on diagonals
			body.velocity.x /= 1 + this.drag

			body.pastPosition = body.position.copy()

			body.position.x += (delta / 1000) * (body.velocity.x / 2.4 * Utils.SCALE)
			body.position.y += (delta / 1000) * (body.velocity.y / 2.4 * Utils.SCALE)

			body.airborne = true
		}

		this.forEachConstraint((bodyA, bodyB) => { // TODO: Abstract the collision detection to its own class and run all four sides on a loop
			if (bodyA.position.y + bodyA.size.height / 2 > bodyB.position.y - bodyB.size.height / 2 &&
				bodyA.pastPosition.y + bodyA.size.height / 2 <= bodyB.pastPosition.y - bodyB.size.height / 2 &&
				bodyA.pastPosition.x + bodyA.size.width / 2 > bodyB.pastPosition.x - bodyB.size.width / 2 &&
				bodyA.pastPosition.x - bodyA.size.width / 2 < bodyB.pastPosition.x + bodyB.size.width / 2) {
					
				bodyA.position.y = bodyB.position.y - bodyB.size.height / 2 - bodyA.size.height / 2
				bodyA.velocity.y = bodyB.velocity.y
				bodyA.velocity.x /= 1 + bodyA.friction + bodyB.friction
				bodyA.airborne = false
			}
		})
		this.delta = performance.now()
	}
	forEachConstraint (callback) {
		for (let i1 = 0; i1 < this.dynamicBodies.length; ++i1) {
			let bodyA = this.dynamicBodies[i1]
			for (let i2 = 0; i2 < this.staticBodies.length; ++i2) {
				let bodyB = this.staticBodies[i2]
				callback(bodyA, bodyB)
			}
		}
	}
	addChild (body) {
		if (body.static)
			this.staticBodies.push(body)
		else
			this.dynamicBodies.push(body)
	}
}