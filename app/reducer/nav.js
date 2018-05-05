import { NavigationActions } from 'react-navigation';

import AppNavigator from '../navigation/navigator';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());
export default function NavigatorReducer(state = initialState, action) {
  // Initial state
  // if (!state) {
  //   return fromJS(AppNavigator.router.getStateForAction(action, state));
  // }

  // Is this a navigation action that we should act upon?
  console.log(state);
  // if (includes(NavigationActions, action.type)) {
  //   return fromJS(AppNavigator.router.getStateForAction(action, state));
  // }
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
