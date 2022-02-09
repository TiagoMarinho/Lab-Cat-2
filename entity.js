class Entity {
	constructor (position, size) {
		this.skin = new Skin(position, size, "#ebedf3")
		this.physicsBody = new PhysicsBody(position, size)
	}
	update () {
		this.skin.position.x = this.physicsBody.position.x
		this.skin.position.y = this.physicsBody.position.y
		this.skin.update()
	}
}