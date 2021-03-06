import React from 'react'
import { View, Text } from 'react-native'
import AppNavigation from './src/appNavigation/routes'

import { createStore } from "redux";
import { Provider } from "react-redux";
import AllReducer from "./src/reducers";

const store = createStore(AllReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  )
}