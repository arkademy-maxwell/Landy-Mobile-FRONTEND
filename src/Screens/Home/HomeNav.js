import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HeaderBanner from './Component/HeaderBanner';
import Home from './Home';
import Rooms from './Screens/Rooms';
import Plane from './Screens/Plane';

const MainNavigator = createStackNavigator(
  {
    Home,
    Rooms,
    Plane,
    HeaderBanner,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(MainNavigator);
