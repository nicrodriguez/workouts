import { AppRegistry } from 'react-native';
import App from './src/App';
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(['Setting a timer', 'Module RCTImageLoader requires', 'Warning: isMounted(...) is deprecated']);

AppRegistry.registerComponent('workouts', () => App);
