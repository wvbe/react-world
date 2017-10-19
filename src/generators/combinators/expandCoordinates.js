// XXXXXXXXXX
// XXXXXXXXXX
// XXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXX
//      XXXXXXXXXX
//      XXXXXXXXXX

module.exports = function expandCoordinates (set1, set2) {
	return [...set1, ...set2].filter((b, i, all) => all.findIndex(a => a.equals(b)) === i);
};
