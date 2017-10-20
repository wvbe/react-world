// @TODO: put in a pure-js folder together with Coordinate
const Coordinate = require('./Coordinate');

module.exports = class Space {
    constructor (tiles) {
        this.tiles = tiles;
        this.byXandY = {};
    }

    forXandY (x, y) {
        const lookupString = x + ',' + y;

        if (this.byXandY[lookupString] === undefined) {
            this.byXandY[lookupString] = this.tiles.find(tile => tile.x === x && tile.y === y) || null;
        }

        return this.byXandY[lookupString];
    }

    getTilesInRenderingOrder () {
        return this.tiles
            .concat()
            .sort((a, b) => {
                const dX = b.x - a.x;
                if (dX) {
                    return dX;
                }

                const dY = a.y - b.y;
                if (dY) {
                    return dY;
                }
                const dZ = b.z - a.z;
                if (dZ) {
                    return dZ;
                }
                return 0;
            })
            .reverse();
    }

    static fromJson (coordinates) {
        return new Space(coordinates.map(coordinate => new Coordinate(...coordinate)));
    }
};
