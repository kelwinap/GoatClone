import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './scenes/home/Index'

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const App = createAppContainer(MainNavigator);

export default App;
