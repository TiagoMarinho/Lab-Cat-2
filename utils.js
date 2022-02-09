class Utils {
	static get SCALE () {
		return 30
	}
	static get delta () {
		
	}
	static getRandomFloat(min, max) {
		return Math.random() * (max - min) + min;
	}
	static getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	static getRandomItem(arr) {
		return arr[Utils.getRandomInt(0, arr.length - 1)];
	}
}