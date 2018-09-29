import React, { Component } from 'react';
import { withTime, Provider } from './context';
import getTime from './getTime';

const Year = withTime(({ time }) => <div className="year">{time.year}/</div>);
const Month = withTime(({ time }) => <div className="month">{time.month}/</div>);
const Dates = withTime(({ time }) => <div className="date">{time.dates}</div>);
const Hours = withTime(({ time }) => <div className="hours">{time.hours}:</div>);
const Minutes = withTime(({ time }) => <div className="minutes">{time.minutes}:</div>);
const Seconds = withTime(({ time }) => <div className="seconds">{time.seconds}</div>);
const Ms = withTime(({ time }) => <div className="seconds">.{time.ms}</div>);
const AMPM = withTime(({ time }) => <div className="ampm">{time.ampm}</div>);
const Timer = () => (
    <div>
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
    </div>
);

export default class Timers extends Component {
    state = {
        time: {}
    };

    constructor(props) {
        super(props);
    }
    render() {
        const { time } = this.state;
        return (
            <Provider value={time}>
                <Timer />
            </Provider>
        );
    }
    componentDidMount() {
        setInterval(() => {
            const time = getTime();
            this.setState({ time });
        }, 100);
    }
}
