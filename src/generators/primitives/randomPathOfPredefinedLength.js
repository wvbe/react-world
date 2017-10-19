const RandomSeed = require('random-seed');
const Coordinate = require('../Coordinate');
// XXXXXX   XXXX
//      XXXXX  X
// XXX        XX
// X XXXXXXXX X
// X        XXX

const randomMovements = [
	[-1,0,0],
	[1,0,0],
	[0, -1,0],
	[0, 1,0],
	// [0, 0, -0.3],
	// [0, 0, 0.3],
];

module.exports = function randomPathOfPredefinedLength (seed, length, start = new Coordinate(0,0,0)) {
	let blob = [
		start
	];

	while (blob.length < length) {
		// console.log(plottedMovements.length);
		const possibleMovements = randomMovements
			// translate relative to absolute
			.map(move => blob[blob.length - 1].clone().transform(...move))

			// filter out options already plotted
			.filter(newCoords => !blob.some(oldCoords => oldCoords.equals(newCoords)));

		const chosenIndex = seed.range(possibleMovements.length);
		const chosenCoords = possibleMovements[chosenIndex];

		if (!chosenCoords) {
			console.log('Reset');
			// String boxed itself in, so remove one from string and try again
			blob = [start];
		}
		else {
			blob.push(chosenCoords);
		}
	}

	return blob;
};
