import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import ConfigStore from "./store";
import React, { Component } from 'react';
import App from "./App";

const store = ConfigStore()
const rootComponent = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(rootComponent);
