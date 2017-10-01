const randomPathOfPredefinedLength = require('./randomPathOfPredefinedLength');

describe('randomPathOfPredefinedLength', () => {
	const path = randomPathOfPredefinedLength('abc', 10);

	it('Always has the requested length', () => {
		expect(path)
			.toHaveLength(10);
	});

	it('Only contains unique coordinates', () => {
		expect(path.map(cc => cc.join(',')).filter((item, i, all) => all.indexOf(item) === i))
			.toHaveLength(path.length);
	});
});
