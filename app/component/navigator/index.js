import {connect} from 'react-redux';
import AppNavigator from './screen';

export default connect(
  state => ({
    navigatorState: state.get('navigatorState').toJS()
  })
)(AppNavigator);
