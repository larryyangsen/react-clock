const clock = { year: 2018, month: 1, dates: 1, hours: 0, minutes: 0, seconds: 0, ms: 0, ampm: 'am' };

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);
const currentTime = () => new Date();
const serializeTime = (date = new Date()) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    dates: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ms: date.getMilliseconds()
});
const civilianHours = (clockTime = clock) => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = (clockTime = clock) => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? 'PM' : 'AM'
});

const prependZero = (key, count = 1) => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? new Array(count).fill('0').join('') + clockTime[key] : clockTime[key]
});

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero('year'),
        prependZero('month'),
        prependZero('date'),
        prependZero('hours'),
        prependZero('minutes'),
        prependZero('seconds'),
        prependZero('ms', 2)
    )(civilianTime);

export default compose(
    currentTime,
    serializeTime,
    convertToCivilianTime,
    doubleDigits
);
