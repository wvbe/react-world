// XXXXXXXXXXXXX
// XXXXXXXXXXXXX
// XXXXXXXXXXXXX
// XXXXXXXXXXXXX
// XXXXXXXXXXXXX

module.exports = function randomPathOfPredefinedLength (width, height, start = [0, 0, 0]) {
	const coords = [];
	const z = 0;
	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			coords.push([x, y, z].map((x, i) => x + start[i]));
		}
	}

	return coords;
};
