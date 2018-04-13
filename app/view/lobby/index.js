import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

type Props = {};
export default class Lobby extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>购彩大厅</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
