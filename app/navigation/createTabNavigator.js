
import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import TabBar from 'ui/TabBar';
import Home from 'screen/Home';
import Result from 'screen/Result';
import Lobby from 'screen/Lobby';
import Order from 'screen/Order';
import Member from 'screen/Member';

function getIcon(name, focused = false) {
  var icons = {
    Home: require('images/tab-home.png'),
    HomeActive: require('images/tab-home.png'),
    Result: require('images/tab-result.png'),
    ResultActive: require('images/tab-result.png'),
    Member: require('images/tab-member.png'),
    MemberActive: require('images/tab-member.png'),
    Order: require('images/tab-order.png'),
    OrderActive: require('images/tab-order.png')
  };
  var iconame = focused ? `${name}Active` : name;

  if (name === 'Lobby') {
    // Use a fake icon for lobby button
    return false;
  }

  return (
    <Image
      source={icons[iconame]}
      style={{ width: 16, height: 19 }}
    />
  );
}

// Screens definnition
const screens = {
  Home: {
    screen: Home,
    path: 'home',
    navigationOptions: () => {
      return {
        title: '首页',
        tabBarIcon: ({ focused }) => getIcon('Home', focused)
      };
    },
  },

  Result: {
    screen: Result,
    path: 'result',
    navigationOptions: () => {
      return {
        title: '开奖',
        tabBarIcon: ({ focused }) => getIcon('Result', focused)
      };
    },
  },

  Lobby: {
    screen: Lobby,
    path: 'lobby',
    navigationOptions: () => {
      return {
        title: '购彩大厅',
        tabBarIcon: ({ focused }) => getIcon('Lobby', focused)
      };
    },
  },

  Order: {
    screen: Order,
    path: 'order',
    navigationOptions: () => {
      return {
        title: '注单',
        tabBarIcon: ({ focused }) => getIcon('Order', focused)
      };
    }
  },

  Member: {
    screen: Member,
    path: 'member',
    navigationOptions: () => {
      return {
        title: '我的',
        tabBarIcon: ({ focused }) => getIcon('Member', focused)
      };
    }
  },
};

export default () => {
  return TabNavigator(
    screens,
    {
      lazy: true,
      initialRouteName: 'Home',
      tabBarComponent: TabBar,
      backBehavior: 'none',
      tabBarOptions: {
        inactiveTintColor: '#7a86a2',
        activeTintColor: '#f2645d',
      }
    }
  );
};
