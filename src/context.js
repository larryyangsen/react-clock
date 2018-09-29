import React from 'react';

export const { Provider, Consumer } = React.createContext();
export const withTime = Component => props => <Consumer>{value => <Component {...props} time={value} />}</Consumer>;
