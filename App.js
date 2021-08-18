import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { StatusBar } from 'expo-status-bar';

import UserDetails from './src/screens/UserDetails';
import Navigator from './src/navigation/Navigator';
import { init } from './src/helpers/db.js';
import usersReducer from './src/store/users-reducer';
import {Text, View, Button, Platform} from 'react-native';


const rootReducer = combineReducers({
  users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
init().then(() => {
  console.log("Criação da base ocorreu com sucesso.");
}).catch((err) => {
  console.log('Criação da base falhou.');
  console.log(err);
});


export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </ Provider>
  );
}

