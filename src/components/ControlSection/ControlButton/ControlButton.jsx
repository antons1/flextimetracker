import React, { Component } from 'react';
import './ControlButton.css';

class ControlButton extends Component {
    constructor() {
        super();

        this.updateTimeData = this.updateTimeData.bind(this);
        this.getClassName = this.getClassName.bind(this);
    }

    updateTimeData() {
        console.log(`${this.props.value > 0 ? "Adding" : "Removing"} ${this.props.value} minutes`);
    }

    getClassName() {
        return `control-button control-button--${this.props.value > 0 ? "positive" : "negative"}`;
    }

    render() {
        return (
            <button className={this.getClassName()} onClick={this.updateTimeData}>
                {this.props.label}
            </button>
        );
    }
};

export default ControlButton;
