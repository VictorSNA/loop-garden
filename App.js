import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import Navigator from './src/navigation/Navigator';
import usersReducer from './src/store/users-reducer';

const rootReducer = combineReducers({
  user: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </ Provider>
  );
}

