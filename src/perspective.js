function createPerspective (degrees, tileSize) {
	const isometricAngle = degrees * (Math.PI / 180);
	const _isometricCos = Math.cos(isometricAngle);
	const _isometricSin = Math.sin(isometricAngle);
	const _isometricTan = Math.tan(isometricAngle);
	// const _isometricDist = Math.sqrt(Math.pow(_isometricCos, 2) + Math.pow(_isometricSin, 2)); // pythagoras

	const tileHeight = tileSize;

	return {
		tileSize: tileSize,
		toPixels: (x, y, z) => {
			const cartX = (x + y) * _isometricCos,
				cartY = (x - y) * _isometricSin;

			return [
				cartX * tileSize, // x
				cartY * tileSize - tileHeight * z // y
			];
		},
		toCoords: (cartX, cartY) => {
			const isoY = (_isometricTan * cartX + cartY),
				isoX = (cartY - isoY) / -_isometricSin - isoY;

			// this is good so far, b should be rescaled for tile size. as
			return [
				isoX / tileSize,
				isoY / tileSize
			];
		}
	}
}

module.exports = createPerspective(30, 30);
