import { AppRegistry } from 'react-native';
import App from './app/index';

AppRegistry.registerComponent('prometheus', () => App);

/** Debug network in chrome devtools network tab */
// eslint-disable-next-line
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
console.ignoredYellowBox = ['Warning: ReactNative.createElement', 'Remote debugger'];
