// colors droppered from:
// https://color.adobe.com/Color-Theme-9-color-theme-10049092/edit/?copy=true&base=2&rule=Custom&selected=2&name=Copy%20of%20Color%20Theme%209&mode=rgb&rgbvalues=0.2601259350776672,0.331436514854398,0.6729698777198792,0.2218179106712341,0.288122504949637,0.4638007879257202,0.8657371401786804,0.7772579789161942,0.5393615365028381,0.872431755065918,0.7402165532111349,0.366335541009903,0.5857448577880859,0.3072174787521078,0.2926576733589172&swatchOrder=0,1,2,3,4

import React from 'react';

import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

render(
	<App />,
	document.getElementById('root')
);

registerServiceWorker();
