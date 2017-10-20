const rectangularPlane = require('./rectangularPlane');

describe('rectangularPlane', () => {
	const path = rectangularPlane(10, 10);
	it('Always has the requested length', () => {
		expect(path)
			.toHaveLength(100);
	});

	it('Only contains unique coordinates', () => {
		expect(path
				.map(cc => cc.toString())
				.filter((item, i, all) => all.indexOf(item) === i)
			)
			.toHaveLength(path.length);
	});

	it('All coordinates have the same Z as start', () => {
		expect(path.filter(cc => cc.z === path[0].z))
			.toHaveLength(path.length);
	})
});
