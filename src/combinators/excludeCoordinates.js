// XXXXXXXXXX
// XXXXXXXXXX
// XXXXX-----XXXXX
// XXXXX-----XXXXX
//      XXXXXXXXXX
//      XXXXXXXXXX

module.exports = function subtracktCoords (set1, set2) {
	return [
		...set1,
		...set2
	].filter(coords => {
		const isInSet1 = set1.some(b => coords.every((x, i) => x === b[i]));
		const isInSet2 = set2.some(b => coords.every((x, i) => x === b[i]));

		return !(isInSet1 && isInSet2);
	});
};
