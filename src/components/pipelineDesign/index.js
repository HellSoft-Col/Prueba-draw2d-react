import React, { Component } from 'react';
import draw2d from 'draw2d';

class Canvas extends Component {

    componentDidMount() {
        this.renderCanvas();
    }

    renderCanvas() {
        let canvas = new draw2d.Canvas('idCanvas');
        canvas.add(new draw2d.shape.node.Start({ x: 50, y: 250 }));
        canvas.add(new draw2d.shape.node.End({ x: 230, y: 150 }));
    }

    render() {
        return (
            <div id="idCanvas" style={{ height: 1500, width: 1500 }}></div>

        );
    }
}

export default Canvas;

