/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './reducer/store';
import AppNavigator from './component/navigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
