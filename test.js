/*let populationSize = 106000
let sampleSize = 111

let differenceAvg = [0, 0, 0]
let samples = 1000

for(let s = 0; s < samples; ++s) {

	let populationPersons = []
	let sampledPersons = []
	let groundTruth = [0, 0, 0]
	let researchResult = [0, 0, 0]
	let str = ""

	class Person {
		constructor (opinion) {
			this.opinion = opinion
		}
	}
	for (let i = 0; i < populationSize; ++i) {
		let prob = Utils.getRandomInt(0, 100)
		let opinion = prob > 50 ? 0 : prob < 25 ? 1 : 2 // this defines how many people actually have each opinion
		populationPersons.push(new Person(opinion))
		++groundTruth[opinion]
	}
	for (let i = 0; i < sampleSize; ++i) {
		let target = Utils.getRandomItem(populationPersons)
		sampledPersons.push(target)
		++researchResult[target.opinion] // this samples a completely random person's opinion from the whole population
	}
	for (let i = 0; i < 3; ++i) {
		groundTruth[i] = 100 / populationSize * groundTruth[i]
		researchResult[i] = 100 / sampleSize * researchResult[i]
	}
	for(let i = 0; i < 3; ++i) {
		let opinionType = i < 1 ? "Red" : i > 1 ? "Blue" : "Yellow"
		let difference = Math.abs(researchResult[i] - groundTruth[i])
		differenceAvg[i] += (difference / samples)
	}
}
console.log(differenceAvg)*/
