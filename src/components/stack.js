import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import React from "react";
import Menu from '../pages/Menu';
import MenuCategorie from '../pages/MenuCategorie';

const Stack = createStackNavigator();

export default function MyStack() {
  
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Menu}>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="MenuCategorie" component={MenuCategorie} />
      </Stack.Navigator>
  );
}