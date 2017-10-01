import React, { Component } from 'react';
import * as Firebase from 'firebase'
import './App.css';

import Header from './components/Header/Header.jsx';
import TimeDisplay from './components/TimeDisplay/TimeDisplay.jsx';
import ControlSection from './components/ControlSection/ControlSection.jsx';

const firebaseConfig  = {
    apiKey: "AIzaSyAFs8O_4Q80JYC-iM8ySjDOysAEIhPY5Ic",
    databaseURL: "https://flextimetracker.firebaseio.com/"
}

const firebase = Firebase.initializeApp(firebaseConfig);
const fbdb = firebase.database();

class App extends Component {
    constructor() {
        super();

        this.getTimeStringFromMinutes = this.getTimeStringFromMinutes.bind(this);
        this.updateTimeValue = this.updateTimeValue.bind(this);
        this.getInitialFirebaseMinutes = this.getInitialFirebaseMinutes.bind(this);
        
        this.state = {
            minutes: 0
        }

        this.getInitialFirebaseMinutes();
    }

    getInitialFirebaseMinutes() {
        const self = this;
        fbdb.ref('/minutes/0').on('value', (snapshot) => self.setState({ minutes: snapshot.val() }));
    }

    getTimeStringFromMinutes() {
        const absMinutes = Math.abs(this.state.minutes);
        const unitString = this.state.minutes >= 0 ? "" : "- ";
        const minutes = (absMinutes % 60) + "";
        const hours = ((absMinutes - minutes) / 60) + "";

        return `${unitString}${hours}:${minutes.length === 1 ? "0" + minutes : minutes}`;
    }

    updateTimeValue(value) {
        fbdb.ref('/minutes/0').transaction((minutes) => minutes += value);
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
