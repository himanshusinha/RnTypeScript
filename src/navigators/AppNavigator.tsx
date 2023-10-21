import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Comp from '../screens/Comp';
import Product from '../screens/Products';
import Notes from '../screens/Notes';
export type RootStackParamsList = {
  HomeScreen: undefined;
  SettingsScreen: {
    name: string;
    email: string;
  };
};
const Stack = createNativeStackNavigator<RootStackParamsList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Notes'} component={Notes} />
        <Stack.Screen name={'Products'} component={Product} />
        <Stack.Screen name={'Comp'} component={Comp} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
