import React, { Component } from 'react';
import getTime from './getTime';
class App extends Component {
    state = {
        time: {}
    };
    componentDidMount() {
        setInterval(() => {
            const time = getTime();
            this.setState({ time });
        }, 1000);
    }
    render() {
        const { time } = this.state;
        return <div>{Object.values(time).join(':')}</div>;
    }
}

export default App;
