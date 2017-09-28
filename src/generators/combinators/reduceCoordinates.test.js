const reduceCoordinates = require('./reduceCoordinates');

const path = reduceCoordinates([
	[0,0,0],
	[1,0,0]
], [
	[1,0,0],
	[2,0,0]
]);

it('Always has the requested length', () => {
	expect(path)
		.toHaveLength(1);
});
