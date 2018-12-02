// reuse redux provider in real component and testing code
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import ReduxThunk from 'redux-thunk';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(ReduxThunk)
  );

  return <Provider store={store}>{children}</Provider>;
};
