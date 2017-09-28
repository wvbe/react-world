import randomPathOfPredefinedLength from './primitives/randomPathOfPredefinedLength';
import rectangularPlane from './primitives/rectangularPlane';
import subtractCoords from './combinators/reduceCoordinates';

export default function (maximumTiles) {

	const squareSize = Math.floor(Math.sqrt(maximumTiles));

	const worldSize = {
		x: squareSize,
		y: squareSize
	};

	const viewportOffset = {
		x: Math.ceil(-worldSize.x / 2),
		y: Math.ceil(-worldSize.y / 2)
	};

	return [
		rectangularPlane(
			worldSize.x,
			worldSize.y,
			[ viewportOffset.x, viewportOffset.y, 0]
		)
	];
}
