module.exports = class Coordinate {
	constructor (x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	clone () {
		return new Coordinate(this.x, this.y, this.z);
	}

	equals (coord) {
		return this === coord || (
			coord &&
			this.x === coord.x &&
			this.y === coord.y &&
			this.z === coord.z
		);
	}

	transform (dx = 0, dy = 0, dz = 0) {
		this.x += dx;
		this.y += dy;
		this.z += dz;

		return this;
	}

	// For debugging purposes only, may change without notice or tests
	toString () {
		return [this.x, this.y, this.z].join(',');
	}
};
