// XXXXXXXXXX
// XXXXXXXXXX
// XXXXX-----XXXXX
// XXXXX-----XXXXX
//      XXXXXXXXXX
//      XXXXXXXXXX

module.exports = function excludeCoordinates (set1, set2) {
	return [
		...set1,
		...set2
	].filter(a => {
		const isInSet1 = set1.some(b => a.equals(b));
		const isInSet2 = set2.some(b => a.equals(b));

		return !(isInSet1 && isInSet2);
	});
};
