import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';  

import Home from'./Home';
import Faq from'./Faq';
import Stats from'./Stats';

import { createStackNavigator} from'@react-navigation/stack';



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

    return <Ionicons name={iconName} size={size} color={color}  />;
  }
  
});

const Tab = createBottomTabNavigator();

export default function App() {



  return (
    
   
  <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} tabBarOptions={{
          activeTintColor: '#6bba62',
          inactiveTintColor: 'gray',
        }}>
      
      <Stack.Screen name="Stats" component={Stats} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Guide" component={Faq} />
      </Tab.Navigator>
      </NavigationContainer>
      
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',

  },
  warning: {
    backgroundColor: 'red'
  },
  lista: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
