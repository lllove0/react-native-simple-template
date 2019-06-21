
import { StyleSheet, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 100,
    width: '100%',
    backgroundColor: 'transparent',
    opacity: 0.95,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    zIndex: 1,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 6,
    paddingBottom: 6,
    borderTopColor: '#e5e5e5',
    borderTopWidth: 1,
    backgroundColor: '#fafcff',
  },

  center: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    height: isIOS ? 48.5 : 53.5,
    overflow: 'visible',
  },

  circle: {
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    backgroundColor: '#fafcff',
    borderRadius: 47,
    transform: [
      {
        translateX: -47 / 2,
      },
      {
        translateY: isIOS ? -21 : -25.3,
      },
    ],
  },

  button: {
    width: 47,
    height: 47,
  },

  text: {
    marginTop: 2,
    fontSize: 14,
    textAlign: 'center',
  },
});
