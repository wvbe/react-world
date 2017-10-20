const Space = require('./Space');

//  +y n=height
// 111
// 111
// 113 +x
const space = Space.fromJson([
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 0],
    [0, 1, 0],
    [1, 1, 0], //4
    [2, 1, 0],
    [0, 2, 0],
    [1, 2, 0],
    [2, 2, 0],
    [0, 0, 1],
    [0, 0, 2]
]);

describe('.fromJson', () => {
    it('populates Space with Coordinate', () => {
        expect(space.tiles.every(tile => tile.x !== undefined))
            .toBeTruthy();
    });
});

describe('#getTilesInRenderingOrder()', () => {
	const renderingOrder = space.getTilesInRenderingOrder();

    it('renders the furthest XY under everything else, aka first', () => {
        expect(renderingOrder[0])
            .toEqual({ x: 0, y: 2, z: 0 });
    });

    it('renders the closest XY with highest Z on top, aka last', () => {
        expect(renderingOrder[renderingOrder.length - 1])
            .toEqual({ x: 2, y: 0, z: 0 });
    });
});

