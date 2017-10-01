import React from 'react';
import './TimeDisplay.css'

const TimeDisplay = (props) =>
    <div className="time-display">
        <div className="time-display__number">{props.timeString}</div>
        <div className="time-display__unit">hours</div>
    </div>;

export default TimeDisplay;
