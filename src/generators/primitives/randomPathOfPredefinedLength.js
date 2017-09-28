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
	[0, 0, -1],
	[0, 0, 1],
];

module.exports = function randomPathOfPredefinedLength (length, start = [0, 0, 0]) {

	let plottedMovements = [
		start
	];

	while (plottedMovements.length < length) {
		// console.log(plottedMovements.length);
		const possibleMovements = randomMovements
		// translate relative to absolute
			.map(move => {
				const last = plottedMovements[plottedMovements.length - 1];
				return last.map((coord, i) => coord + move[i]);
			})

			// filter out options already plotted
			.filter(newCoords => {
				return !plottedMovements.some(coords => coords.every((coord, i) => newCoords[i] === coord));
			});

		const chosenIndex = Math.round(Math.random() * 1000) % possibleMovements.length;
		const chosenCoords = possibleMovements[chosenIndex];

		if (!chosenCoords) {
			// String boxed itself in, so remove one from string and try again
			plottedMovements = [start];
		}
		else {
			plottedMovements.push(chosenCoords);
		}
	}

	return plottedMovements;
};
