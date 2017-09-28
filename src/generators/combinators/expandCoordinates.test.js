const expandCoordinates = require('./expandCoordinates');

const path = expandCoordinates([
	[0,0,0],
	[1,0,0]
], [
	[1,0,0],
	[2,0,0]
]);

it('Always has the requested length', () => {
	expect(path)
		.toHaveLength(3);
});

it('Only contains unique coordinates', () => {
	expect(path.map(cc => cc.join(',')).filter((item, i, all) => all.indexOf(item) === i))
		.toHaveLength(path.length);
});
