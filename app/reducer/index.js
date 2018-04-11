import {Map, fromJS} from 'immutable';
import {loop, combineReducers} from 'redux-loop-symbol-ponyfill';
import NavigatorReducer from './navigator'

const reducers = {
  navigatorState: NavigatorReducer
};

const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const nameSpacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
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
  return loop(fromJS(nextState), effects);
}
