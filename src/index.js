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


const createHomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="TopTab" children={createTopTabs} />
      <Stack.Screen name="BottomTab" children={createBottomTabs} />
    </Stack.Navigator>
  );
};

const createTopTabs = () => {
  return(
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="tab1" component={TabPage1}/>
      <MaterialTopTabs.Screen name="tab2" component={TabPage2}/>
      <MaterialTopTabs.Screen name="tab3" component={TabPage3}/>
    </MaterialTopTabs.Navigator>
  );
};

const createBottomTabs = () => {
  return(
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="tab1" component={TabPage1} />
      <MaterialBottomTabs.Screen name="tab2" component={TabPage2} />
      <MaterialBottomTabs.Screen name="tab3" component={TabPage3} />
    </MaterialBottomTabs.Navigator>
  );
};

export default function index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Drawer1} />
        <Drawer.Screen name="Favorites" component={Drawer2} />
        <Drawer.Screen name="Settings" component={Drawer3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
