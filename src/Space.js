// @TODO: put in a pure-js folder together with Coordinate

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
                return (-b.x + b.y) - (-a.x + a.y) ||
                    a.z - b.z;
            });

    }
};
