
import { StackNavigator } from 'react-navigation';

import Login from 'screen/Login';
import createTabNavigator from './createTabNavigator';

const MainScreenNavigator = createTabNavigator();

MainScreenNavigator.navigationOptions = {
  header: null
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreenNavigator },
    Login: { screen: Login }
  },
  {
    initialRouteName: 'Main',
    mode: 'card',
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#f0f1f1' }
  }
);

export default AppNavigator;
