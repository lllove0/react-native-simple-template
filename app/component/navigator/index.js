import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';

import {connect} from 'react-redux';
import AppNavigator from './navigator';

class NavigatorView extends Component {
  static displayName = 'NavigationView';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigatorState: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired
      }))
    }).isRequired
  };

  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigatorState
          })
        }
      />
    );
  }
}

export default connect(
  state => ({
    navigatorState: state.get('navigatorState').toJS()
  })
)(NavigatorView);
