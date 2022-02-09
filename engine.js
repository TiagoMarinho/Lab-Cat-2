class Engine extends Scene {
	constructor (canvas) {
		super(canvas)

		this.player = new Player(new Point(100.5, 0.5), new Size(30, 40)) // TODO: Abstract player to a Player class
		this.player.physicsBody.friction = 0
		this.addChild(this.player)

		let map = [
				[500, 500, 1000, 4], 
				[1000, 400, 100, 4], 
				[1000, 700, 500, 4], 
				[750, 600, 300, 4],
				[1000, 50, 500, 4]
			] // TODO: Abstract map generation

		for (let i = 0; i < 10; ++i) {
			let x = Utils.getRandomInt(0, innerWidth),
				y = Utils.getRandomInt(250, innerHeight),
				w = Utils.getRandomInt(50, 125) * 2,
				h = 4

			map.push([x, y, w, h])
		}

		for (let i = 0; i < map.length; ++i) {
			let ground = new Entity(new Point(map[i][0] +.5, map[i][1] + .5), new Size(map[i][2], map[i][3]))
			ground.physicsBody.static = true
			this.addChild(ground)
		}

		this.lastTimeUserPressedSpace = null
	}
	run () { // TODO: Move player movement to a separate class
		if (!this.keyRecorder.isDown.up) this.lastTimeUserPressedSpace = null
		if (this.keyRecorder.isDown.up && !this.player.physicsBody.airborne) {
			if (this.lastTimeUserPressedSpace !== this.keyRecorder.isDown.up) {
				this.player.physicsBody.velocity.y -= 75

				if (this.lastTimeUserPressedSpace !== null) debugger
				this.lastTimeUserPressedSpace = this.keyRecorder.isDown.up
			}
		}
		if (this.keyRecorder.isDown.left) {
			this.player.physicsBody.velocity.x -= this.player.physicsBody.airborne ? 0 : 5 // should account for ground friction
		}
		if (this.keyRecorder.isDown.right) {
			this.player.physicsBody.velocity.x += this.player.physicsBody.airborne ? 0 : 5 // should account for ground friction
		}
		if (this.keyRecorder.isDown.j) {
			this.player.physicsBody.affectedByGravity = false
		} else {
			this.player.physicsBody.affectedByGravity = true
		}

		this.update()
		requestAnimationFrame(_ => {
			this.run()
		});
	}
}