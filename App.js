/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'

import { store } from './src/redux'
import RootView from './src/views'

const App = () => (
  <Provider store={store}>
    <RootView />
  </Provider>
)

export default App;
