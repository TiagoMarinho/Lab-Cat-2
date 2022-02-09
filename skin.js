class Skin {
	constructor (position, size, color) {
		this.position = position
		this.size = size
		this.color = color
		this._shape = new createjs.Shape()
		this._shape.graphics.f("rgba(255, 255, 255, 0.5)").s("#fff").dr(-size.width / 2, -size.height / 2, size.width, size.height)
		this.x = position.x
		this.y = position.y
	}
	update () {
		this._shape.x = Math.round(this.position.x) + 0.5
		this._shape.y = Math.round(this.position.y) + 0.5
	}
	get getCreatejsCompatibleDisplayObject () {
		return this._shape
	}
}