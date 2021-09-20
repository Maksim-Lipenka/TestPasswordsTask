import { createStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const reducer = combineReducers({form: formReducer})

export default createStore(
  reducer,
  composeWithDevTools()
);