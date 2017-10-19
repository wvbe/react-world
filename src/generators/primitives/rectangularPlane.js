const Coordinate = require('../Coordinate');

module.exports = function rectangularPlane (width, height, start = new Coordinate(0, 0, 0)) {
	const coords = [];
	const z = 0;

	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			coords.push(start.clone().transform(x, y, z));
		}
	}

	return coords;
};
