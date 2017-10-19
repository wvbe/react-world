// @TODO: put in a pure-js folder together with Coordinate

module.exports = class Space {
    constructor (tiles) {
        this.tiles = tiles;
        this.byXandY = {};
    }

    forXandY (x, y) {
        const lookupString = x + ',' + y;

        if (this.byXandY[lookupString] === undefined) {
            this.byXandY[lookupString] = this.tiles.find(tile => tile[0] === x && tile[1] === y) || null;
        }

        return this.byXandY[lookupString];
    }

    getTilesInRenderingOrder () {
        return this.tiles
            .concat()
            .sort((a, b) => {
                return (-b[0] + b[1]) - (-a[0] + a[1]) ||
                    a[2] - b[2];
            });

    }
};