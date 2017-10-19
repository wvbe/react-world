const offset = Symbol();


module.exports = class Space {
	constructor (initial) {
		this.known = new WeakMap();
		this[offset] = [0, 0, 0];
	}


	get (x, y, z) {
		return [x, y, z].reduce((onion, v) => {
			return onion[v >= 0 ? 1 : 0][Math.abs(v)]
		}, this.known);
	}

	set (x, y, z, metadata) {
		const isPositive = [x, y, z].map(v => v >= 0 ? 1 : 0);

		return [x, y, z].reduce((onion, v) => {
			return onion[v >= 0 ? 1 : 0][Math.abs(v)]
		}, this.known);
	}
};
