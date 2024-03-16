import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from './screens/Main';
import { OptionsScreen } from './screens/Options';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="Settings" component={OptionsScreen} />
    </Drawer.Navigator>
  );
}

export { MyDrawer };