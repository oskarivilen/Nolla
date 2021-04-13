import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';


export default function App() {


  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [total, setTotal] = useState('');

  function plus() {
    var num1s = parseInt(num1, 10);
    var num2s = parseInt(num2, 10);
    setTotal(num1s + num2s);
  }

  function minus() {
    var num1s = parseInt(num1, 10);
    var num2s = parseInt(num2, 10);
    setTotal(num1s - num2s);
  }


  return (
    <View style={styles.container}>
      <Image style={{ width: 250, height: 100 }} source={{ uri: 'IMAGE_URI' }} />
      <Text style={{ fontSize: 20, margin: 5 }}>CALCULATOR</Text>
      <Text style={{ margin: 5 }}>Result: {total}</Text>

      <TextInput keyboardType="number-pad" style={{ width: 200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
        onChangeText={num1 => setNum1(num1)} value={num1} />
      <TextInput keyboardType="number-pad" style={{ width: 200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
        onChangeText={num2 => setNum2(num2)} value={num2} />
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Button title="➕" onPress={plus} />
        <Button title="➖" onPress={minus} />
      </View>
      <StatusBar style="auto" />
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
