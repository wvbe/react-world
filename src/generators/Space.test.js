const rectangularPlane = require('./Space');

const testSpace = new Space([
	/* x <= -1 */ [
		[[
			['-1,-1,-1'],
			['-1,-1,0'],
		],
		/* y >= 0 */ [
			/* z <= -1 */ [],
			/* z >= 0 */ []
		]]
	],
	/* x >= 0 */ [
		/* y <= -1 */ [[
			/* z <= -1 */ [],
			/* z >= 0 */ []
		],
		/* y >= 0 */ [
			/* z <= -1 */ [],
			/* z >= 0 */ [
				'0,0,0',
				'0,0,1',
			]
		]]
	]
]);

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
});
