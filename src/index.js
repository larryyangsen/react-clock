import React from 'react';
import ReactDom from 'react-dom';
import Timer from './timer';
import './index.css';
import { TimerProvider } from './context';
const App = () => (
    <TimerProvider>
        <Timer />
    </TimerProvider>
);
ReactDom.render(<App />, document.querySelector('#root'));
