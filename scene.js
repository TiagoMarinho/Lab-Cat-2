class Scene {
	constructor (canvas) {
		this.entities = []
		this.physicsWorld = new PhysicsWorld()
		this._stage = new createjs.Stage(canvas)
		
		this.keyRecorder = new KeyRecorder()
		this.keyRecorder.beginListening()
	}
	addChild (entity) {
		this.entities.push(entity)
		this.physicsWorld.addChild(entity.physicsBody)
		this._stage.addChild(entity.skin.getCreatejsCompatibleDisplayObject) // doesn't belong here maybe?
	}
	update () {
		for (let i = 0; i < this.entities.length; ++i) {
			let entity = this.entities[i]

			entity.update();
		}
		this.physicsWorld.step()
		this._stage.update()
	}
}