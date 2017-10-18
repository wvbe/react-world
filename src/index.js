import React from 'react';

import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import World from './World';
import Anchor from './Anchor';
import SvgBox from './3d/SvgBox';
import SvgTile from './3d/SvgTile';


function putDownSomeBoxesInARainbowFormation () {
	const children = [];

	for (let i = -6; i <= 6; i++) {
		let twofitty = i * (255/15);
		children.push(<Anchor key={'y' + i} x={ 0 } y={ i } z={ 0 }>
			<SvgBox
				fill={ `rgba(${255-twofitty}, ${twofitty}, ${255-twofitty}, 1)` }
			/>
		</Anchor>);
		children.push(<Anchor key={'z' + i} x={ 0 } y={ 0 } z={ i }>
			<SvgBox
				fill={ `rgba(${255-twofitty}, ${255-twofitty}, ${twofitty}, 1)` }
			/>
		</Anchor>);
		children.push(<Anchor key={'x' + i} x={ i } y={ 0 } z={ 0 }>
			<SvgBox
				fill={ `rgba(${twofitty}, ${255-twofitty}, ${255-twofitty}, 1)` }
			/>
		</Anchor>);
	}

	return children;
}
const randomPathOfPredefinedLength = require('./generators/randomPathOfPredefinedLength');
const rectangularPlane = require('./generators/rectangularPlane');
const subtractCoords = require('./combinators/subtractCoordinates');
const Space = require('./Space');

const space = new Space(randomPathOfPredefinedLength(10));
render(
	<World>
		<Anchor x={ 0 } y={ 0 }>
			{ space.getTilesInRenderingOrder().map((coord, i) => (
				<Anchor key={ i } x={ coord[0] } y={ coord[1] } z={ coord[2] }>
					<SvgBox label={ coord.join(',') }/>

				</Anchor>
			)) }
		</Anchor>
	</World>,
	document.getElementById('root')
);

registerServiceWorker();
