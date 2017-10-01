import React from 'react';
import './TimeDisplay.css'

const TimeDisplay = (props) =>
    <div className="time-display">
        <div className="time-display__number">12:34</div>
        <div className="time-display__unit">hours</div>
    </div>;

export default TimeDisplay;
