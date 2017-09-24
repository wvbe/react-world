import React, {Component} from 'react';

import perspective from '../perspective';

const BORDER_WIDTH = 1;
const BORDER_NODES = [
	[1,1,0],
	[1,1,1],
	[0,1,1],
	[0,0,1],
	[0,0,0],
	[1,0,0]
];

let spatialCoordinates = BORDER_NODES
	.map(cc => cc.map(c => 1 * c))
	.map(coordinate => perspective.toPixels(...coordinate))
	.map(cc => cc.map(c => c + BORDER_WIDTH));

const offset = spatialCoordinates.reduce((min, cc) => cc.map((c, i) => Math.min(c, min[i])), [0, 0]);

spatialCoordinates = spatialCoordinates.map(cc => cc.map((c, i) => c - offset[i]));

const width = perspective.toPixels(1, 1, 0)[0] + 2 * BORDER_WIDTH,
	height = perspective.toPixels(1, 0, 0)[1] - perspective.toPixels(0, 1, 1)[1] + 2 * BORDER_WIDTH;

export default function SvgBox () {

	return (
		<svg width={ width } height={ height }>
			<polygon
				points={ spatialCoordinates.map(c => c.join(',')).join(' ') }
				style={{
					fill: 'rgba(255,255,255,0.8)',
					stroke: 'purple',
					strokeWidth: '1'
				}}
			/>
		</svg>
	);
}
