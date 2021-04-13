import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';


export default function App() {


  const[text, setText] = useState('');
  const[data, setData] = useState([]);

  const buttonPressed= () => {
    setData([...data,text ]);
    setText('' );
  }

  return (
    <View style={styles.container}>
       <View style={styles.container}>

      <Text style={{ fontSize: 20, margin: 5 }}>Lista</Text>
      <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1, margin: 5 }}
        onChangeText={text => setText(text)} value={text} />
<Button title="Add" onPress={buttonPressed} />
</View>
<View style={styles.lista}>
<StatusBar style="auto" />
         
        <FlatList
        data ={data}
        renderItem={({  item}) =>
        <Text>{item}</ Text>}
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
     
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
  },
  lista: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
