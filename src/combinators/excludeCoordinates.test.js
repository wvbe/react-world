const excludeCoordinates = require('./excludeCoordinates');

describe('excludeCoordinates', () => {
	const path = excludeCoordinates([
		[0,0,0],
		[1,0,0]
	], [
		[1,0,0],
		[2,0,0]
	]);

	it('Always has the requested length', () => {
		expect(path)
			.toHaveLength(2);
	});

	it('Only contains unique coordinates', () => {
		expect(path.map(cc => cc.join(',')).filter((item, i, all) => all.indexOf(item) === i))
			.toHaveLength(path.length);
	});
});
