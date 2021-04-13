import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';


export default function Stats ({ route, navigation}) {


 


  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <Image style={{ width: 250, height: 100 }} source={{ uri: 'IMAGE_URI' }} />
      <Text style={{ fontSize: 25, margin: 5 }}>Here are stats:</Text>
      <Text style={{ fontSize: 20, marginTop: 5 }}>1000h meditated</Text>

      
      
   
      
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
