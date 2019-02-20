import React, { Component } from 'react';
import './Pad.css';
import Konva from 'konva';
import { Layer, Rect, Stage, Group } from 'react-konva';
import { pad_constants } from '../../constants';

class Pad extends Component {
    render() {
        return (
            <Rect
                width={pad_constants.PAD_WIDTH} height={pad_constants.PAD_HEIGHT} x={this.props.x} y={this.props.y}
                fill="black"
            />
        );
    }
}

export default Pad;
