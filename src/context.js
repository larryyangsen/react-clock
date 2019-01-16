import React, { Component, useState, useEffect } from 'react';
import getTime from './getTime';

export const timeContext = React.createContext();

const { Provider } = timeContext;

export const TimerProviderFunction = ({ children }) => {
    const [time, setTime] = useState(getTime());
    useEffect(() => {
        const timeIntervalID = setInterval(() => setTime(getTime()), 100);
        return () => {
            clearInterval(timeIntervalID);
        };
    }, []); // [] run only one time

    return <Provider value={{ ...time }}>{children}</Provider>;
};
export class TimerProviderClass extends Component {
    state = {};

    setTime = () => {
        const time = getTime();
        return this.setState({ ...time });
    };

    componentDidMount() {
        this.setTime();
        this.timeIntervalID = setInterval(() => this.setTime(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.timeIntervalID);
    }
    render() {
        return (
            <Provider value={{ ...this.state, setTime: this.setTime }}>
                {this.props.children}
            </Provider>
        );
    }
}
