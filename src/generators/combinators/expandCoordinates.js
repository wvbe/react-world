// XXXXXXXXXX
// XXXXXXXXXX
// XXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXX
//      XXXXXXXXXX
//      XXXXXXXXXX

module.exports = function expandCoordinates (set1, set2) {
	return [...set1, ...set2].filter((coords, i, all) => all.findIndex(b => coords.every((x, i) => x === b[i])) === i);
};
