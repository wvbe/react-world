import React, {Component} from 'react';

import perspective from '../perspective';

const BORDER_WIDTH = 1;
const BORDER_NODES = [
	[1,1,0], // 0
	[1,1,1],
	[0,1,1], // 2
	[0,0,1],
	[0,0,0], // 4
	[1,0,0]
];
const COORDINATE_CLOSEST_TO_CAMERA = perspective
    .toPixels(1, 0, 1)
    .map(c => c + BORDER_WIDTH);

let spatialCoordinates = BORDER_NODES
	.map(coordinate => perspective.toPixels(...coordinate))
	.map(cc => cc.map(c => c + BORDER_WIDTH));

export default class SvgBox extends Component {
	shouldComponentUpdate = () => false;
	render () {
        const {
            label,
            stroke = 'black',
            innerStroke = 'rgba(0,0,0,0.3)',
            fill = 'rgba(100,100,160,0.9)',
            strokeWidth = BORDER_WIDTH
        } = this.props;
        return [
			<polygon
				key={'outline'}
				points={spatialCoordinates.map(c => c.join(',')).join(' ')}
				stroke={stroke}
				fill={fill}
				strokeWidth={strokeWidth}
			/>,
			<line
				key={'x-bar'}
				x1={COORDINATE_CLOSEST_TO_CAMERA[0]}
				y1={COORDINATE_CLOSEST_TO_CAMERA[1]}
				x2={spatialCoordinates[3][0]}
				y2={spatialCoordinates[3][1]}
				stroke={innerStroke}
				strokeWidth={strokeWidth}
			/>,
			<line
				key={'y-bar'}
				x1={COORDINATE_CLOSEST_TO_CAMERA[0]}
				y1={COORDINATE_CLOSEST_TO_CAMERA[1]}
				x2={spatialCoordinates[1][0]}
				y2={spatialCoordinates[1][1]}
				stroke={innerStroke}
				strokeWidth={strokeWidth}
			/>,
			<line
				key={'z-bar'}
				x1={COORDINATE_CLOSEST_TO_CAMERA[0]}
				y1={COORDINATE_CLOSEST_TO_CAMERA[1]}
				x2={spatialCoordinates[5][0]}
				y2={spatialCoordinates[5][1]}
				stroke={innerStroke}
				strokeWidth={strokeWidth}
			/>,
            false && label ?
				<text key={'label'}
					  textAnchor={'middle'}
					  x={COORDINATE_CLOSEST_TO_CAMERA[0]}
					  y={COORDINATE_CLOSEST_TO_CAMERA[1] + 3}
				>{label}</text> :
                null
        ];
    }
}
