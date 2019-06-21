
import React, { Component } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import { connect } from 'react-redux';
import AppNavigator from './navigator';

const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends Component {
  static displayName = 'NavigationView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired
      }))
    }).isRequired
  };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.lastBackPressed = null;
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener
          })
        }
      />
    );
  }
}

export default connect(
  state => ({
    nav: state.nav
  })
)(AppWithNavigationState);
