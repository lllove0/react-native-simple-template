
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class TabBar extends Component {
  render() {
    const { navigation, navigationState, getLabel, renderIcon, activeTintColor, inactiveTintColor } = this.props;
    const routes = navigationState.routes;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.circle}
          onPress={() => navigation.navigate('Lobby')}
        >
          <Image
            source={
              // Check the lobby is avtived
              routes[navigationState.index].key === 'Lobby'
                ? require('images/tab-lobby.png')
                : require('images/tab-lobby-normal.png')
            }
            style={styles.button}
          />
        </TouchableOpacity>
        {
          routes.map(
            (route, index) => {
              var color = navigationState.index === index ? activeTintColor : inactiveTintColor;

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={.9}
                  style={
                    [
                      styles.tab,
                      route.routeName === 'Lobby' && styles.center
                    ]
                  }
                  onPress={() => {
                    navigation.navigate(route.routeName);
                  }}
                >
                  { renderIcon({ route }) }
                  <Text style={
                    [
                      { color },
                      styles.text,
                    ]
                  }>
                    { getLabel({ route }) }
                  </Text>
                </TouchableOpacity>
              );
            }
          )
        }
      </View>
    );
  }
}
