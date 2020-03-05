import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

import Feed from './feed';
import Detail from './detail';

import Drawer1 from './pages/DrawerPages/Drawer1';
import Drawer2 from './pages/DrawerPages/Drawer2';
import Drawer3 from './pages/DrawerPages/Drawer3';

import TabPage1 from './pages/TabPages/TabPage1';
import TabPage2 from './pages/TabPages/TabPage2';
import TabPage3 from './pages/TabPages/TabPage3';

export default function index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Drawer1} />
        <Drawer.Screen name="Favorites" component={Drawer2} />
        <Drawer.Screen name="Settings" component={Drawer3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
