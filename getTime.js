const clock = { hours: 0, minutes: 0, seconds: 0, ampm: 'am' };

const compose = (...fns) => arg => fns.reduce((composed, f) => f(composed), arg);
const currentTime = () => new Date();
const serializeTime = (date = new Date()) => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});
const civilianHours = (clockTime = clock) => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = (clockTime = clock) => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? 'PM' : 'AM'
});

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key]
});

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero('hours'),
        prependZero('minutes'),
        prependZero('seconds')
    )(civilianTime);

export default compose(
    currentTime,
    serializeTime,
    convertToCivilianTime,
    doubleDigits
);
