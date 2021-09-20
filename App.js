import React from 'react'
import Entry from './src/index';
import {Provider} from 'react-redux';
import store from './src/store'

export default () => {
  return (
    <Provider store={store}>
      <Entry />
    </Provider>
    )
}