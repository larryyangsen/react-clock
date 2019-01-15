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
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setInterval(() => this.setTime(), 100);
    }
    render() {
        return (
            <Provider value={{ ...this.state, setTime: this.setTime }}>
                {this.props.children}
            </Provider>
        );
    }
}
