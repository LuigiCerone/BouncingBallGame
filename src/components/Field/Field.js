import React, { Component } from 'react';
import Konva from 'konva';
import { Layer, Rect, Stage, Group, Text } from 'react-konva';
import './Field.css';
import * as constants from '../../constant';
import Pad from '../Pad/Pad';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            score: 0,
            leftPad: {
                x: constants.LEFT_PAD_X,
                y: constants.LEFT_PAD_Y
            },
            rightPad: {
                x: constants.RIGHT_PAD_X,
                y: constants.RIGHT_PAD_Y
            },
            ball: {
                x: props.width / 2,
                y: props.height / 2
            }
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleStart() {
        this.setState({ isStarted: true });
        console.log('Game started!');

        // Event listeners for keyup and down.
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown(key) {
        // console.log(key);
        switch (key) {
            case 38:
                this.setState({ upPressed: true });
                break;
            case 40:
                this.setState({ downPressed: true });
                break;
        }
    }

    handleKeyUp(key) {
        // console.log(key);
        switch (key) {
            case 38:
                this.setState({ upPressed: false });
                break;
            case 40:
                this.setState({ downPressed: false });
                break;
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    render() {
        let canvas_class = this.state.isStarted ? "started" : "default";
        return (
            <div className="App" id={this.props.id}>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Group>
                            <Text text="Click to start" />
                            <Rect
                                width={this.props.width} height={this.props.height} x={0} y={0}
                                fill="yellow"
                                onClick={this.handleStart}
                            />
                            <Group>
                                <Pad x={this.state.leftPad.x} y={this.state.leftPad.y}></Pad>
                                <Pad x={this.state.rightPad.x} y={this.state.rightPad.y}></Pad>
                            </Group>
                        </Group>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Field;

/* <div className="App" id={this.props.id}>
               <canvas className={canvas_class} id="canvas" width={this.props.width} height={this.props.height}></canvas>
               Press start to play the game!
               <button onClick={this.handleStart}>START</button>
           </div> */