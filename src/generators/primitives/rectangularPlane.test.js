const rectangularPlane = require('./rectangularPlane');

describe('rectangularPlane', () => {
	const path = rectangularPlane(10, 10, [3, 3, 3]);

	it('Always has the requested length', () => {
		expect(path)
			.toHaveLength(100);
	});

	it('Only contains unique coordinates', () => {
		expect(path.map(cc => cc.join(',')).filter((item, i, all) => all.indexOf(item) === i))
			.toHaveLength(path.length);
	});

	it('All coordinates have the same Z as start', () => {
		expect(path.filter(cc => cc[2] === 3))
			.toHaveLength(path.length);
	})
});
