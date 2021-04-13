import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated, TextInput, Button, TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { StatusBar } from 'expo-status-bar';


export default function Home({Navigation}) {


  const[input,setInput] = useState('');
  const[key, setKey] = useState(0);

  const [minute, setMinuter] = useState(3);
  const funRef = useRef(null);
  const hourSeconds = input * 60;

  const renderTime = (dimension, time) => {
    return (
      <View>
      <StatusBar style="auto" />
        <Text>{input}</Text>
        <Text>{dimension}</Text>
      
      </View>
    );
  };

  useEffect(() => {
    if (minute !== 0) {
      funRef.current = setTimeout(() => {
        setMinuter(minute - 1);
      }, 60000);
    } else {
      clearTimeout(funRef.current);
    }
  }); 

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };

  

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>

<TextInput placeholder='Time' keyboardType="number-pad" style={{ marginTop: 50, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(input) => setInput(input)}
      value={input}/> 
             
      <CountdownCircleTimer
      {...timerProps}
        key={key}
        isPlaying
        initialRemainingTime={hourSeconds}
        duration={hourSeconds}
        colors="#004777"
        onComplete={() => {
          return [false, 0]
          
        }}
      >
        {({ elapsedTime }) => {
          //console.log(hourSeconds - elapsedTime / 1000);
          return renderTime("minute", minute);
        }}
      </CountdownCircleTimer>
       
        <Button onPress={() => setKey(prevKey => prevKey + 1)} title ="Restart" />
          
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginBottom:20
  },
  remainingTime: {
    fontSize: 46,
  },
});
