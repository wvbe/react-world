import React, {Component} from 'react';

const viewportStyle = {
	position: 'relative',
	width: '800px',
	height: '600px'
};

const worldStyle = {
	position: 'absolute',
	left: '50%',
	top: '50%',
	overflow: 'visible'
};

export default function World ({ children }) {
	return (
		<div style={ viewportStyle }>
			<div style={ worldStyle }>
				{ children }
			</div>
		</div>
	);
}
