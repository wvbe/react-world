import rectangularPlane from './primitives/rectangularPlane';
import expandCoordinates from './combinators/expandCoordinates';

function hasOverlappingCoordinates (set1, set2) {
	return set1.some(coords => set2.some(b => coords.every((x, i) => x === b[i])));
}

const MIN_NEW_ISL_WIDTH = 2,
	MAX_NEW_ISL_WIDTH = 10,
	MIN_NEW_ISL_HEIGHT = 2,
	MAX_NEW_ISL_HEIGHT = 10;

export default function (maximumTiles) {

	const squareSize = Math.ceil(Math.sqrt(maximumTiles));

	let island = [];

	let safety = 0;
	let sls = 0;
	while (island.length < maximumTiles) {
		if (++safety > 1000) {
			console.error('SAFETY');
			break;
		}


		const randomTile = island.length ?
			island[island.length - 1] :
			[0, 0, 0];

		const newPlane = rectangularPlane(
			Math.round(Math.random() * 5),
			Math.round(Math.random() * 5),
			randomTile);

		++sls;
		island = expandCoordinates(island, newPlane);
	}
	console.info('SAFETY', safety, sls);

	return [island];
}
