// XXXXXXXXXX
// XXXXXXXXXX
// XXXXX----------
// XXXXX----------
//      ----------
//      ----------

module.exports = function subtractCoordinates (set1, set2) {
	return set1.filter(a => !set2.some(b => a.equals(b)));
};
