import React from 'react';

import perspective from '../perspective';

const BORDER_WIDTH = 1;
const BORDER_NODES = [
	[1,0,0],
	[1,1,0],
	[0,1,0],
	[0,0,0]
];

let spatialCoordinates = BORDER_NODES
	.map(cc => cc.map(c => 1 * c))
	.map(coordinate => perspective.toPixels(...coordinate))
	.map(cc => cc.map(c => c + BORDER_WIDTH));

export default function SvgBox ({ stroke = 'black', fill = 'rgba(100,100,160,0.8)', strokeWidth = BORDER_WIDTH, onClick }) {
	return (
		<polygon
			points={ spatialCoordinates.map(c => c.join(',')).join(' ') }
			stroke={ stroke }
			fill={ fill }
			strokeWidth={ strokeWidth }
			onClick={ onClick }
		/>
	);
}
