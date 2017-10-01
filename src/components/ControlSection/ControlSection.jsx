import React, { Component } from 'react';
import './ControlSection.css';

const ControlButton = (props) =>
    <button className="control-button" onClick={props.onClickFn.bind(this, props.value)}>
        {props.label}
    </button>

class ControlSection extends Component {
    constructor() {
        super();
        
        this.onCustomNumberChange = this.onCustomNumberChange.bind(this);
        this.getCustomNumberForButton = this.getCustomNumberForButton.bind(this);

        this.state = {
            customNumber: 0
        };
    }

    onCustomNumberChange(e) {
        this.setState({ customNumber: e.target.value });
    }

    getCustomNumberForButton(positive, number) {
        if (positive) {
            return Math.abs(number);
        } else {
            return Math.abs(number) * (-1);
        }
    }

    render() {
        return (
            <div className="control-section">
                <div className="control-section__fast-controls">
                    <ControlButton label="+ 15" value={15} onClickFn={this.props.updateTimeData}/>
                    <ControlButton label="+ 30" value={30} onClickFn={this.props.updateTimeData} />
                    <ControlButton label="+ 60" value={60} onClickFn={this.props.updateTimeData} />
                    <ControlButton label="- 15" value={-15} onClickFn={this.props.updateTimeData} />
                    <ControlButton label="- 30" value={-30} onClickFn={this.props.updateTimeData} />
                    <ControlButton label="- 60" value={-60} onClickFn={this.props.updateTimeData} />
                </div>
                <div className="control-section__custom-controls">
                    <ControlButton label="-" value={this.getCustomNumberForButton(false, this.state.customNumber)} onClickFn={this.props.updateTimeData} />
                    <input placeholder={0} onChange={this.onCustomNumberChange} type="number" className="custom-controls__number-input" />
                    <ControlButton label="+" value={this.getCustomNumberForButton(true, this.state.customNumber)} onClickFn={this.props.updateTimeData} />
                </div>
            </div>
        );
    }
}

export default ControlSection;
