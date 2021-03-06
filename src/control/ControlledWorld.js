import React, {Component} from 'react';
import RandomSeed from 'random-seed';
import color from 'color-js';

import Anchor from '../3d/Anchor';
import Coordinate from '../generators/Coordinate';
import Space from '../generators/Space';
// import perspective from '../perspective';

import World from '../3d/World';
import SvgBox from './SvgBox';
// import SvgLine from '../3d/SvgLine';
// import SvgTile from '../3d/SvgTile';
import * as css from './css';
import generators from '../generators';

import randomPathOfPredefinedLength from '../generators/primitives/randomPathOfPredefinedLength';

import rectangularPlane from '../generators/primitives/rectangularPlane';
// import expandCoordinates from '../generators/combinators/expandCoordinates';
// import subtractCoords from '../generators/combinators/subtractCoordinates';


const seed = new RandomSeed();
console.log('generators', generators);
class ControlledWorld extends Component {
    spaces = [];
    shouldComponentUpdate = () => false;

    componentWillMount () {
        this.addSpace(generators.islandWorldGenerator(seed, 1000));
        // this.addSpace(expandCoordinates(
        //     rectangularPlane(20,20, new Coordinate(-10,-10, 0)),
			// randomPathOfPredefinedLength(seed, 100)));
    }

    addSpace = (coords) => {
        const space = new Space(coords);
        space.color = color({
            hue: Math.floor(Math.random() * 255),
            saturation: 0.5 + Math.random() * 0.5,
            value: 0.5 + Math.random() * 0.5,
            alpha: 0.9
        });

        console.log('addSpace', space, coords);
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
            <Anchor key={ i }>
                { space.getTilesInRenderingOrder().map((coord, i) => (
                    <Anchor key={ i } { ...coord }>
                        <SvgBox
                            fill={ space.color }
                            label={ coord.toString() }
                            stroke={'rgb(0,0,0)'}
                            strokeWidth={ 1 }
                        />
                    </Anchor>
                )) }
            </Anchor>
        );
    };

    render () {
        return (
            <div { ...css.merge(css.steno.normal) }>
                <ul { ...css.merge(
                    css.position.absolute,
                    {
                        zIndex: 1
                    }
                )}>
                    <li>
                        <a onClick={ () => this.addSpace(randomPathOfPredefinedLength(seed, 50)) }>
                            randomPathOfPredefinedLength(50)
                        </a>
                    </li>
                    <li>
                        <a onClick={ () => this.addSpace(rectangularPlane(20,20, new Coordinate(-10,-10, 0))) }>
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
