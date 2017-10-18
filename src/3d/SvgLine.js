import React, {Component} from 'react';

import perspective from '../perspective';

const BORDER_WIDTH = 1;

export default function SvgLine ({ path, stroke = 'black', strokeWidth = BORDER_WIDTH }) {
    let spatialCoordinates = path
        .map(coordinate => perspective.toPixels(...coordinate))
        .map(cc => cc.map(c => c + BORDER_WIDTH));

    return spatialCoordinates
		.reduce(
			(lines, start, i, all) => i ?
				lines.concat([
					<line
						key={ i }
						x1={ start[0] }
						y1={ start[1] }
						x2={ all[i - 1][0] }
						y2={ all[i - 1][1] }
						stroke={ stroke }
						strokeWidth={ strokeWidth }
					/>
				]) :
				lines,
			[]
		);
}
