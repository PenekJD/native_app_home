import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './components/Menu';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


