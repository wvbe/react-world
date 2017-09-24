import React from 'react';

import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import World from './World';
import Anchor from './Anchor';
import Block from './3d/SvgBox';

render(
	<World>
		<Anchor x="0" y="0" z="0"><Block /></Anchor>
		<Anchor x="1" y="0" z="0"><Block /></Anchor>
		<Anchor x="2" y="0" z="0"><Block /></Anchor>
		<Anchor x="3" y="0" z="0"><Block /></Anchor>
		<Anchor x="0" y="1" z="0"><Block /></Anchor>
		<Anchor x="0" y="2" z="0"><Block /></Anchor>
		<Anchor x="0" y="3" z="0"><Block /></Anchor>
		<Anchor x="0" y="0" z="1"><Block /></Anchor>
		<Anchor x="0" y="0" z="2"><Block /></Anchor>
		<Anchor x="0" y="0" z="3"><Block /></Anchor>
		<Anchor x="-1" y="0" z="0"><Block /></Anchor>
		<Anchor x="-2" y="0" z="0"><Block /></Anchor>
		<Anchor x="-3" y="0" z="0"><Block /></Anchor>
		<Anchor x="0" y="-1" z="0"><Block /></Anchor>
		<Anchor x="0" y="-2" z="0"><Block /></Anchor>
		<Anchor x="0" y="-3" z="0"><Block /></Anchor>
		<Anchor x="0" y="0" z="-1"><Block /></Anchor>
		<Anchor x="0" y="0" z="-2"><Block /></Anchor>
		<Anchor x="0" y="0" z="-3"><Block /></Anchor>
	</World>,
	document.getElementById('root')
);

registerServiceWorker();
