import React, {Component} from 'react';

import perspective from './perspective';

// .luggage-tile {
// 	transition: 0.2s all;
// 	position: absolute;
// }

export default class TileComponent extends Component {
	render() {
		let xyz = [
				this.props.x,
				this.props.y,
				this.props.z
			].map(n => parseInt(n));
		const pixels = perspective.toPixels(xyz[0], xyz[1], xyz[2]);
		const transform = perspective.toPixels(-0.5, -0.5, 1);
		const styleAttr = {
				position: 'absolute',
				left: pixels[0] + 'px',
				top: pixels[1] + 'px',
				zIndex: xyz[0] - xyz[1] + xyz[2] + 10000,
				transform: `translate(${transform[0]}px, ${transform[1]}px)`
			};

		return (<div className='luggage-tile' style={styleAttr}>{this.props.children}</div>);
	}
}
