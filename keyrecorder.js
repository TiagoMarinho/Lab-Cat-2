class KeyRecorder {
	constructor () {
		this.isDown = {
			up: false,
			left: false,
			right: false,
			j: false
		}
	}
	beginListening () {
		window.addEventListener ("keydown", e => {
			if (e.keyCode === 87 && !this.isDown.up)
				this.isDown.up = performance.now()
			if (e.keyCode === 68 && !this.isDown.right)
				this.isDown.right = performance.now()
			if (e.keyCode === 65 && !this.isDown.left)
				this.isDown.left = performance.now()
			if (e.keyCode === 16 && !this.isDown.j)
				this.isDown.j = performance.now()
		})
		window.addEventListener ("keyup", e => {
			if (e.keyCode === 87)
				this.isDown.up = false
			if (e.keyCode === 68)
				this.isDown.right = false
			if (e.keyCode === 65)
				this.isDown.left = false
			if (e.keyCode === 16)
				this.isDown.j = false
		})
	}
}