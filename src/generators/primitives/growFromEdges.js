const RandomSeed = require('random-seed');

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

function filterElegible (coordinate, i, all) {
	return randomMovements
		.map(move => coordinate.clone().transform(...move))
		.filter(coord => !all.some(cc => cc.equals(coord)));
}

module.exports = function growFromEdges (seed, blob, iterations, probability) {
	let watchList = blob.filter(filterElegible
};

