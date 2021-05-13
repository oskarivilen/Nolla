import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Stats({ mins, times }) {
  return (
    <LinearGradient style={styles.linkku} colors={['#b4ec9c', '#e6f7e0',]}>
      <View>
        <StatusBar style="auto" />
        <Image style={{ width: 100, height: 100, marginBottom: 10, marginLeft: 85 }} source={require('./leaf2.png')} />
        <Text style={{ textAlign: 'center', fontSize: 35, marginBottom: 10 }}>Here are the stats:</Text>
        <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 10 }} >
          Mindful minutes:
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 40, marginTop: 10 }} >
          {mins}
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 5 }} >
          Total sessions:
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 40, marginBottom: 150, marginTop: 10 }} >
          {times}
        </Text>
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
