import React from 'react';

import {render} from 'react-dom';
import ControlledWorld from './control/ControlledWorld';
// function putDownSomeBoxesInARainbowFormation () {
//     const children = [];
//
//     for (let i = -6; i <= 6; i++) {
//         let twofitty = i * (255/15);
//         children.push(<Anchor key={'y' + i} x={ 0 } y={ i } z={ 0 }>
// 			<SvgBox
// 				fill={ `rgba(${255-twofitty}, ${twofitty}, ${255-twofitty}, 1)` }
// 			/>
// 		</Anchor>);
//         children.push(<Anchor key={'z' + i} x={ 0 } y={ 0 } z={ i }>
// 			<SvgBox
// 				fill={ `rgba(${255-twofitty}, ${255-twofitty}, ${twofitty}, 1)` }
// 			/>
// 		</Anchor>);
//         children.push(<Anchor key={'x' + i} x={ i } y={ 0 } z={ 0 }>
// 			<SvgBox
// 				fill={ `rgba(${twofitty}, ${255-twofitty}, ${255-twofitty}, 1)` }
// 			/>
// 		</Anchor>);
//     }
//
//     return children;
// }

render(
	<ControlledWorld />,
	document.getElementById('root')
);
