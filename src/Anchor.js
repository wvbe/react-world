import React, {Component} from 'react';

import perspective from './perspective';

export default function Anchor ({ x = 0, y = 0, z = 0, children }) {
	// parseInt coordinate props and round them off
	const pixels = perspective.toPixels(...[x, y, z].map(n => parseInt(n))).map(c => Math.round(c));

	return (
		<svg { ...{
			x: pixels[0],
			y: pixels[1],
			overflow: 'visible'
		}}>
			{ children }
		</svg>
	);
}
