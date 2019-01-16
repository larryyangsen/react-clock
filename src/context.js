import React, { Component } from 'react';
import getTime from './getTime';

export const timeContext = React.createContext();

const { Provider } = timeContext;
export class TimerProvider extends Component {
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
