import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

const text = Platform.select({
  android: 'android',
  ios: 'ios'
});
type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text> {text} 首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
