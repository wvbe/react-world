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

describe('getTilesInRenderingOrder', () => {
	const renderingOrder = space.getTilesInRenderingOrder();

    it('renders the furthest XY under everything else, aka first', () => {
        expect(renderingOrder[0])
            .toEqual([0, 2, 0]);
    });

    it('renders the closest XY with highest Z on top, aka last', () => {
        expect(renderingOrder[renderingOrder.length - 1])
            .toEqual([2, 0, 0]);
    });
});
