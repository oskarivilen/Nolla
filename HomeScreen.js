import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';


export default function HomeScreen({ navigation }) {


  const[data, setData] = useState([]);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [history, setHistory] = useState('');  
  const [total, setTotal] = useState('');

 



  function plus() {
    var num1s = parseInt(num1, 10);
    var num2s = parseInt(num2, 10);
    setTotal(num1s + num2s);
    const str = num1 +  ' + ' + num2 + ' = ' + (num1s + num2s)

    setData([...data, str]);
    setNum1('');
    setNum2('');
   
  }

  function minus() {
   
    var num1s = parseInt(num1, 10);
    var num2s = parseInt(num2, 10);
    setTotal(num1s - num2s);
    const str = num1 +  ' - ' + num2 + ' = ' + (num1s - num2s)
    setData([...data, str]);
    setNum1('');
    setNum2('');
  }
    return(
    <View style={styles.container}>
        <View style={styles.container}>

<Text style={{ fontSize: 20, margin: 5 }}>CALCULATOR</Text>
<Text style={{ margin: 5 }}>Result: {total}</Text>

<TextInput keyboardType="number-pad" style={{ width: 200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
 onChangeText={num1 => setNum1(num1)} value={num1} />
<TextInput keyboardType="number-pad" style={{ width: 200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
 onChangeText={num2 => setNum2(num2)} value={num2} />



<Button title="➕" onPress={plus} />
 <Button title="➖" onPress={minus} />
 <Button onPress={()  => navigation.navigate('History', {data})}
        title="History"/>
        </View >
</View>
        
    
       
        );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          
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