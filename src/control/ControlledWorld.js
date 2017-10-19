import React, {Component} from 'react';

import World from '../World';
import Anchor from '../Anchor';
import SvgBox from '../3d/SvgBox';
import SvgLine from '../3d/SvgLine';
import SvgTile from '../3d/SvgTile';

import perspective from '../perspective';

import randomPathOfPredefinedLength from '../generators/randomPathOfPredefinedLength';
import rectangularPlane from '../generators/rectangularPlane';
import subtractCoords from '../combinators/subtractCoordinates';
import Space from '../Space';
import color from 'color-js';
console.log(color);

class ControlledWorld extends Component {
    spaces = [];
    shouldComponentUpdate = () => false;

    componentWillMount () {
        this.addSpace(rectangularPlane(20,20, [-10,-10, 0]));
        this.addSpace(randomPathOfPredefinedLength(100));
        this.addSpace(randomPathOfPredefinedLength(100));
    }

    addSpace = (coords) => {

        const space = new Space(coords);
        space.color = color({
            hue: Math.floor(Math.random() * 255),
            saturation: 0.5 + Math.random() * 0.5,
            value: 0.5 + Math.random() * 0.5
        });

        console.log('addSpace', space);
        this.spaces.push(space);

        this.forceUpdate();
    };

    removeLastSpace = (all) => {
        if (all) {
            this.spaces = [];
        }
        else {
            this.spaces.pop();
        }
        this.forceUpdate();
    };

    renderSpace = (space, i) => {
        return (
            <Anchor key={ i } x={ 0 } y={ 0 }>
                { space.getTilesInRenderingOrder().map((coord, i) => {
                    const shade = 1 - space.tiles.indexOf(coord) / space.tiles.length;
                    return (
                        <Anchor key={ i } x={ coord[0] } y={ coord[1] } z={ coord[2] }>
                            <SvgBox
                                fill={ space.color }
                                label={ Math.round(Math.random() * 100) }
                                stroke={'rgb(0,0,0)'}
                                strokeWidth={ 1 }
                            />
                        </Anchor>
                    );
                }) }
            </Anchor>
        );
    };

    render () {
        return (
            <div>
                <ul>
                    <li>
                        <a onClick={ () => this.addSpace(randomPathOfPredefinedLength(50)) }>
                            randomPathOfPredefinedLength(50)
                        </a>
                    </li>
                    <li>
                        <a onClick={ () => this.addSpace(rectangularPlane(20,20, [-10,-10, 0])) }>
                            rectangularPlane(50)
                        </a>
                    </li>
                    <li>
                        <a onClick={ () => this.removeLastSpace(false) }>
                            Remove last
                        </a>
                    </li>
                    <li>
                        <a onClick={ () => this.removeLastSpace(true) }>
                            Remove all
                        </a>
                    </li>
                </ul>
                <World>
                    { this.spaces.map(this.renderSpace) }
                </World>
            </div>
        );


    }


}
export default ControlledWorld;
