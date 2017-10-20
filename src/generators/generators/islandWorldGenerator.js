const rectangularPlane = require('../primitives/rectangularPlane');
// const randomPathOfPredefinedLength = require('../primitives/randomPathOfPredefinedLength');
const expandCoordinates = require('../combinators/expandCoordinates');
// const excludeCoordinates = require('../combinators/excludeCoordinates');

const Coordinate = require('../Coordinate');

module.exports = function (seed, maximumTiles) {
	let blob = [
		new Coordinate(0, 0, 0)
	];

	let safety = 0;
	let sls = 0;

	while (blob.length < maximumTiles) {
		if (++safety > 100) {
			console.warn('Aborting islandWorldGenerator loop');
			break;
		}
		const randomTile = blob[seed.range(blob.length)];

		const newPlane = rectangularPlane(
			9,
			9,
			randomTile.clone().transform(-4, -4, 0));

		++sls;

		blob = expandCoordinates(blob, newPlane);

		console.log(sls, blob.length);
	}

	return blob;
}
