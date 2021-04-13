import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';


export default function Faq ({ route, navigation}) {


 


  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <Image style={{ width: 250, height: 100, marginBottom:10 }} source={require('./nolla.png')} />
      <Text style={{ fontSize: 25, margin: 5 }}>How to Meditate:</Text>
      <Text style={{ fontSize: 20, marginTop: 5 }}>1.Sit</Text>
      <Text style={{ fontSize: 20}}>2.Close your eyes</Text>
      <Text style={{ fontSize: 20 }}>3.Meditate</Text>
      
      
   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning: {
    backgroundColor: 'red'
  }
});
