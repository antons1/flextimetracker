import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import TimeDisplay from './components/TimeDisplay/TimeDisplay.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <TimeDisplay />
            </div>
        );
    }
}

export default App;
