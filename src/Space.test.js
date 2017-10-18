const Space = require('./Space');

const space = new Space([
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [2, 1, 0],
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 0],
    [0, 0, 1],
    [0, 0, 2]
]);

it('getTilesInRenderingOrder', () => {
	expect(space.getTilesInRenderingOrder())
		.toEqual([
            [2, 2, 0],
            [2, 1, 0],
            [2, 0, 0],

            [1, 2, 0],
            [1, 1, 0],
            [1, 0, 0],

            [0, 1, 0],
            [0, 2, 0],
            [0, 0, 0],

            // z-index determines render order if x and y are equal
            [0, 0, 1],
            [0, 0, 2],
			// tiles on top are rendered last
        ]);
});
