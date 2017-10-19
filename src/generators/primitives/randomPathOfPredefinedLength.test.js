const randomPathOfPredefinedLength = require('./randomPathOfPredefinedLength');
const RandomSeed = require('random-seed');

describe('randomPathOfPredefinedLength', () => {
	const blob = randomPathOfPredefinedLength(new RandomSeed('abc'), 10);

	it('Always has the requested length', () => {
		expect(blob)
			.toHaveLength(10);
	});

	it('Only contains unique coordinates', () => {
		expect(blob.map(cc => cc.join(',')).filter((item, i, all) => all.indexOf(item) === i))
			.toHaveLength(blob.length);
	});
});
