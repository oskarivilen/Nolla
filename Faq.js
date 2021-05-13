import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


export default function Faq({ route, navigation }) {


  return (
    <LinearGradient style={styles.linkku} colors={['#b4ec9c', '#e6f7e0',]}>
      <View>
        <StatusBar style="auto" />
        <Image style={{ width: 250, height: 100, marginBottom: 10 }} source={require('./nollatr.png')} />
        <Text style={{ fontSize: 25, margin: 5, fontFamily: 'Futura' }}>How to Meditate:</Text>
        <Text style={{ fontSize: 20, marginTop: 5, fontFamily: 'Futura' }}>1.Sit{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>Find a comfy position {"\n"} for example a chair or a pillow.{"\n"}</Text>
        <Text style={{ fontSize: 20, fontFamily: 'Futura' }}>2.Close your eyes{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>Start focusing just on your breath, {"\n"}counting between breaths can help.{"\n"}</Text>
        <Text style={{ fontSize: 20, fontFamily: 'Futura' }}>3.Meditate{"\n"}</Text>
        <Text style={{ fontSize: 20 }}>Just focus on the present and notice {"\n"} when your mind wanders.{"\n"}</Text>
        <Text style={{ fontSize: 22, fontFamily: 'Futura' }}>He who cares the least wins.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linkku: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  warning: {
    backgroundColor: 'red'
  }
});
