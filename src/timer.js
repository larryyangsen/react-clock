import React, { useContext } from 'react';
import { timeContext } from './context';

const timer = () => {
    const time = useContext(timeContext);
    const Year = () => <div className="year">{time.year}/</div>;
    const Month = () => <div className="month">{time.month}/</div>;
    const Dates = () => <div className="date">{time.dates}</div>;
    const Hours = () => <div className="hours">{time.hours}:</div>;
    const Minutes = () => <div className="minutes">{time.minutes}:</div>;
    const Seconds = () => <div className="seconds">{time.seconds}</div>;
    const Ms = () => <div className="seconds">.{time.ms}</div>;
    const AMPM = () => <div className="ampm">{time.ampm}:</div>;
    return (
        <>
            <div>
                <Year />
                <Month />
                <Dates />
            </div>
            <div>
                <AMPM />
                <Hours />
                <Minutes />
                <Seconds />
                <Ms />
            </div>
        </>
    );
};

export default timer;
