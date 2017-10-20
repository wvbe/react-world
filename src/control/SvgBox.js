import React, {Component} from 'react';
import * as css from './css';

import perspective from '../perspective';

const BORDER_WIDTH = 1;

function calc (coords) {
	return coords.map(coordinate => perspective.toPixels(...coordinate))
        .map(cc => cc.map(c => c + BORDER_WIDTH));
}
const COORDINATE_CLOSEST_TO_CAMERA = perspective
    .toPixels(1, 0, 1)
    .map(c => c + BORDER_WIDTH);

let BORDER_NODES = calc([
    [1,1,0], // 0
    [1,1,1],
    [0,1,1], // 2
    [0,0,1],
    [0,0,0], // 4
    [1,0,0]
]);

// facing to the bottom left, aka -y
let XZ_NODES = calc([
	[0,0,0],
	[0,0,1],
	[1,0,1],
	[1,0,0]
]);

// facing to the bottom right, aka +x
let YZ_NODES = calc([
	[1,0,0],
	[1,1,0],
	[1,1,1],
	[1,0,1]
]);

// facing top, aka +z
let XY_NODES = calc([
	[0,0,1],
	[1,0,1],
	[1,1,1],
	[0,1,1]
]);

export default class SvgBox extends Component {
	renders = 0;

	static defaultProps = {
		fill: css.color('rgb(100,100,160)')
	};

	shouldComponentUpdate = () => false;

	render () {
        const {
            label,
            stroke = 'black',
            innerStroke = 'rgba(0,0,0,0.3)',
            fill,
            strokeWidth = BORDER_WIDTH
        } = this.props;
        return [
			<polygon
				key={'xz'}
				points={XZ_NODES.map(c => c.join(',')).join(' ')}
				stroke={stroke}
				fill={fill.toCSS()}
				strokeWidth={strokeWidth}
			/>,
			<polygon
				key={'xy'}
				points={XY_NODES.map(c => c.join(',')).join(' ')}
				stroke={stroke}
				fill={fill.lightenByRatio(0.2).toCSS()}
				strokeWidth={strokeWidth}
			/>,
			<polygon
				key={'yz'}
				points={YZ_NODES.map(c => c.join(',')).join(' ')}
				stroke={stroke}
				fill={fill.darkenByRatio(0.2).toCSS()}
				strokeWidth={strokeWidth}
			/>,
			<line
				key={'x-bar'}
				x1={COORDINATE_CLOSEST_TO_CAMERA[0]}
				y1={COORDINATE_CLOSEST_TO_CAMERA[1]}
				x2={BORDER_NODES[3][0]}
				y2={BORDER_NODES[3][1]}
				stroke={innerStroke}
				strokeWidth={strokeWidth}
			/>,
			<line
				key={'y-bar'}
				x1={COORDINATE_CLOSEST_TO_CAMERA[0]}
				y1={COORDINATE_CLOSEST_TO_CAMERA[1]}
				x2={BORDER_NODES[1][0]}
				y2={BORDER_NODES[1][1]}
				stroke={innerStroke}
				strokeWidth={strokeWidth}
			/>,
			<line
				key={'z-bar'}
				x1={COORDINATE_CLOSEST_TO_CAMERA[0]}
				y1={COORDINATE_CLOSEST_TO_CAMERA[1]}
				x2={BORDER_NODES[5][0]}
				y2={BORDER_NODES[5][1]}
				stroke={innerStroke}
				strokeWidth={strokeWidth}
			/>,
            label ?
				<text key={'label'}
					  textAnchor={'middle'}
					  x={COORDINATE_CLOSEST_TO_CAMERA[0]}
					  y={COORDINATE_CLOSEST_TO_CAMERA[1] + 3}
				>{label}</text> :
                null
        ];
    }
}
