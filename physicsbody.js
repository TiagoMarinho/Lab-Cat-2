class PhysicsBody {
	constructor (position, size) {
		this.position = position
		this.size = size
		this.affectedByGravity = true
		
		this.velocity = {
			x: 0,
			y: 0
		}

		this.pastPosition = position.copy()

		this.friction = 0.5

		this.airborne = true
	}
	applyImpulse (x, y) {
		this.velocity.x += x
		this.velocity.y += y
	}
}