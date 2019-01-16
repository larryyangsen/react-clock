import React from 'react';
import ReactDom from 'react-dom';
import Timer from './timer';
import './index.css';
import { TimerProviderClass, TimerProviderFunction } from './context';
const App = () => (
    <>
        <h2>Run with provider class</h2>
        <TimerProviderClass>
            <Timer />
        </TimerProviderClass>
        <h2>Run with provider function</h2>
        <TimerProviderFunction>
            <Timer />
        </TimerProviderFunction>
    </>
);
ReactDom.render(<App />, document.querySelector('#root'));
