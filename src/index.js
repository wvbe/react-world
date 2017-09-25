import React from 'react';

import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import World from './World';
import Anchor from './Anchor';
import SvgBox from './3d/SvgBox';


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

function putDownAStringOfBoxes (length, start = [0, 0, 0]) {
	const randomMovements = [
		[-1,0,0],
		[1,0,0],
		[0, -1,0],
		[0, 1,0],
		[0, 0, -1],
		[0, 0, 1],
	];

	const plottedMovements = [
		start
	];

	while (plottedMovements.length < length - 1) {
		const possibleMovements = randomMovements
			// translate relative to absolute
			.map(move => {
				const last = plottedMovements[plottedMovements.length - 1];
				return last.map((coord, i) => coord + move[i]);
			})

			// filter out options already plotted
			.filter(newCoords => {
				console.log(newCoords.join(',') + ' > ' + plottedMovements.map(c => c.join(',')).join(' '));
				return !plottedMovements.some(coords => coords.every((coord, i) => newCoords[i] === coord));
			});

		plottedMovements.push(possibleMovements[Math.floor(Math.random() * possibleMovements.length)]);
	}

	return plottedMovements.map((coords, i) => (
		<Anchor
			key={'y' + i}
			x={ coords[0] }
			y={ coords[1] }
			z={ coords[2] }
		>
			<SvgBox
				fill={ `rgba(${Math.round((i / length) * 255)}, ${Math.round((i / length) * 255)}, ${Math.round((i / length) * 255)}, 0.4)` }
			/>
		</Anchor>
	));
}

render(
	<World>
		<Anchor>
			{ putDownAStringOfBoxes(100) }
		</Anchor>
	</World>,
	document.getElementById('root')
);

registerServiceWorker();
