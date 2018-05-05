import { loop, combineReducers } from 'redux-loop-symbol-ponyfill';
import NavigatorReducer from './nav';

const reducers = {
  nav: NavigatorReducer
};
const nameSpacedReducer = combineReducers(
  reducers
);

// export default function mainReducer(state, action) {
//   const [nextState, effects] = action.type === RESET_STATE
//     ? nameSpacedReducer(action.payload, action)
//     : nameSpacedReducer(state || void 0, action);
//
//   return loop(fromJS(nextState), effects);
// }

export default function mainReducer(state, action) {
  const [nextState, effects] = nameSpacedReducer(state || void 0, action);
  return loop(nextState, effects);
}
