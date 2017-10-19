import rectangularPlane from './primitives/rectangularPlane';
import randomPathOfPredefinedLength from './primitives/randomPathOfPredefinedLength';
import expandCoordinates from './combinators/expandCoordinates';
import excludeCoordinates from './combinators/excludeCoordinates';

const Coordinate = require('./Coordinate');

export default function (seed, maximumTiles) {
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
		const newPlane = randomPathOfPredefinedLength(seed, seed.range(10), randomTile);

		++sls;

		blob = expandCoordinates(blob, newPlane);
	}

	const randomTile = blob[seed.range(blob.length)];
	const path = rectangularPlane(
		9,
		9,
		randomTile.clone().transform(-4, -4, 0));

	console.log(path);
	// blob = growFromEdges(seed, 3, 0.2);

	return [
		blob,
		path
	];
}
