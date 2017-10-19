// ----------
// ----------
// -----XXXXX-----
// -----XXXXX-----
//      ----------
//      ----------

module.exports = function reduceCoordinates (set1, set2) {
	return set1.filter(a => set2.some(b => a.equals(b)));
};
