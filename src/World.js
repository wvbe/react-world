import React, {Component} from 'react';

//.luggage{
// width: 800px;
// height: 600px;
// }
//
// .luggage {
// 	position: relative;
// 	border: 1px solid blue;
// }
//
// .luggage-world {
// 	position: absolute;
// 	left: 50%;
// 	top: 50%;
// 	overflow: visible;
// }

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
export default class LuggageComponent extends Component {
	constructor () {
		super();
	}

	renderChildren () {
		return this.props.children.map(Child => <Child perspective={this.perspective} />);
	}
	render() {
		return (
			<div style={ viewportStyle }>
				<div style={ worldStyle }>
					{this.props.children}
				</div>
			</div>
		);
	}
}
