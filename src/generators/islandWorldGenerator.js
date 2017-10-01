import RandomSeed from 'random-seed';

import rectangularPlane from './primitives/rectangularPlane';
import expandCoordinates from './combinators/expandCoordinates';

function hasOverlappingCoordinates (set1, set2) {
	return set1.some(coords => set2.some(b => coords.every((x, i) => x === b[i])));
}

const MIN_NEW_ISL_WIDTH = 2,
	MAX_NEW_ISL_WIDTH = 10,
	MIN_NEW_ISL_HEIGHT = 2,
	MAX_NEW_ISL_HEIGHT = 10;

export default function (seed, maximumTiles) {
	const random = new RandomSeed(seed);
	let island = [];

	let safety = 0;
	let sls = 0;
	while (island.length < maximumTiles) {
		if (++safety > 100) {
			console.warn('Aborting islandWorldGenerator loop');
			break;
		}

		const randomTile = island.length ?
			island[random.range(island.length)] :
			[0, 0, 0];

		const newPlane = rectangularPlane(
			11,
			11,
			[-5 + randomTile[0], -5 + randomTile[1], 0]);

		++sls;
		island = expandCoordinates(island, newPlane);
	}

	return [island];
}
