import React from 'react';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Faq from './Faq';
import Stats from './Stats';


const Stack = createStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'leaf';
    } else if (route.name === 'Guide') {
      iconName = 'information-circle-sharp';
    } else if (route.name === 'Stats') {
      iconName = 'bar-chart';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }

});

const Tab = createBottomTabNavigator();

export default function App() {

  const [mins, setMins] = useState(0)
  const [times, setTimes] = useState(0)

  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} tabBarOptions={{
        activeTintColor: '#6bba62',
        inactiveTintColor: 'gray',
      }}>
        <Stack.Screen name="Stats">
          {props => <Stats {...props} mins={mins} times={times} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <Home {...props} setMins={setMins} mins={mins} setTimes={setTimes} times={times} />}
        </Stack.Screen>
        <Stack.Screen name="Guide" component={Faq} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

