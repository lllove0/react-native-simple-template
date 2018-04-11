import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Home from '../../view/home';
import Result from '../../view/result';
import Lobby from '../../view/lobby';
import Order from '../../view/order';
import Member from '../../view/member';
import Login from '../../view/auth/login';

const headerColor = '#39babd';
const activeColor = 'white';

export const HomeTab = TabNavigator({
  Home: {screen: Home},
  Result: {screen: Result},
  Lobby: {screen: Lobby},
  Order: {screen: Order},
  Member: {screen: Member}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

HomeTab.navigationOptions = {
  title: 'Template',
  headerTitleStyle: {color: 'white'},
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Main: { screen: HomeTab },
  Login: { screen: Login }
});

export default AppNavigator;
