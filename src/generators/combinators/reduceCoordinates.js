// ----------
// ----------
// -----XXXXX-----
// -----XXXXX-----
//      ----------
//      ----------

module.exports = function reduceCoordinates (set1, set2) {
	return set1.filter(coords => set2.some(b => coords.every((x, i) => x === b[i])));
};
