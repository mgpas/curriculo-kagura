import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SobreScreen from './screens/SobreScreen';
import RelationScreen from './screens/RelationScreen';

const MyTheme = {
  dark: true,
  colors: {
    primary: '#DF8175',
    background: '#2B2C3D',
    card: '#515C6B',
    text: '#F1E4C7',
    border: '#383A50',
    notification: '#DF8175',
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
        <Drawer.Screen name="Relações" component={RelationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}