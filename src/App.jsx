import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import TimeDisplay from './components/TimeDisplay/TimeDisplay.jsx';
import ControlSection from './components/ControlSection/ControlSection.jsx';

class App extends Component {
    constructor() {
        super();

        this.getTimeStringFromMinutes = this.getTimeStringFromMinutes.bind(this);
        this.updateTimeValue = this.updateTimeValue.bind(this);

        this.state = {
            minutes: 123
        }
    }

    getTimeStringFromMinutes() {
        const absMinutes = Math.abs(this.state.minutes);
        const unitString = this.state.minutes >= 0 ? "" : "- ";
        const minutes = (absMinutes % 60) + "";
        const hours = ((absMinutes - minutes) / 60) + "";

        return `${unitString}${hours}:${minutes.length === 1 ? "0" + minutes : minutes}`;
    }

    updateTimeValue(value) {
        this.setState({ minutes: this.state.minutes + value });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <TimeDisplay timeString={this.getTimeStringFromMinutes()} />
                <ControlSection updateTimeData={this.updateTimeValue} />
            </div>
        );
    }
}

export default App;
