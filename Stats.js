import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import {Dimensions} from 'react-native';

export default function Stats ({ route, navigation}) {




  return (
    <LinearGradient style = {styles.linkku} colors={['#b4ec9c', '#e6f7e0',]}>
    <View>
        <StatusBar style="auto" />
      <Image style={{ width: 250, height: 100 }} source={{ uri: 'IMAGE_URI' }} />
      <Text style={{textAlign:'center', fontSize: 25, margin: 5 }}>Here are stats:</Text>
       
       {/*
      <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [
            10,
            21,
            9,
            3,
            10,
            12
          ]
        }
      ]
    }}
    width={350} // from react-native
    height={220}
    
    yAxisSuffix="h"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#35756c",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  /> */}

      
      
   
      
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linkku: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  warning: {
    backgroundColor: 'red'
  }
});
