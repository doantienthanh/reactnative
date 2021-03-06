/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Home';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Home);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
