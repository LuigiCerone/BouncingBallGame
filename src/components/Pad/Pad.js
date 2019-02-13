import React, { Component } from 'react';
import './Pad.css';
import Konva from 'konva';
import { Layer, Rect, Stage, Group } from 'react-konva';
import constants from '../../constant';

class Pad extends Component {
    render() {
        return (
            <Rect>
                <Rect
                    width={constants.PAD_WIDTH} height={constants.PAD_HEIGHT} x={50} y={50}
                    fill="yellow"
                    onClick={this.handleStart}
                />
            </Rect>
        );
    }
}

export default Pad;
