import React, { useState, useEffect, useRef } from 'react';
import {
  Text, View, StyleSheet, Button, TouchableWithoutFeedback,
  Keyboard, KeyboardAvoidingView, Platform
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import * as SQLite from 'expo-sqlite';
import { Audio } from 'expo-av';


const db = SQLite.openDatabase('minuteslist.db');

export default function Home({ setMins, mins, setTimes, times }) {


  const [input, setInput] = useState('');
  const [key, setKey] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [minute, setMinuter] = useState(3);
  const funRef = useRef(null);
  const hourSeconds = input * 60;

  const [sound, setSound] = React.useState();

  const [list, setLists] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists list (id integer primary key not null, input integer);');
    });
    updateList();
  }, []);

  const saveItem = () => {
    db.transaction(tx => {
      tx.executeSql('insert into list (input) values (?);', [input]);
    }, null, updateList
    )
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from list;', [], (_, { rows }) =>
        setLists(rows._array)
      );
    });
  }

  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from list where id = ?;`, [id]);
      }, null, updateList
    )
  }

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./audio/bell.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);



  const renderTime = ({ remainingTime }) => {
    const rem = Math.ceil(remainingTime / 60);
    if (rem === 0) {
      return (
        <View>
          <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 10, fontFamily: 'Futura' }}>
            Start {"\n"}
          meditating
        </Text>
        </View>
      )
    }
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 10, fontFamily: 'Futura' }}>Remaining</Text>
        <Text style={{ textAlign: 'center', fontSize: 26, marginBottom: 10, fontFamily: 'Futura' }}>{rem}</Text>
        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Futura' }}>
          {rem === 1 ? 'minute' : 'minutes'}
        </Text>

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
    <LinearGradient style={styles.linkku} colors={['#b4ec9c', '#e6f7e0',]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

            <Text style={{ textAlign: 'center', fontSize: 40, fontFamily: 'Futura' }}>
              {input === '0' ? 'Set timer' : 'Just breathe'}
            </Text>
            <TextInput label='Time' keyboardType="number-pad"
              style={styles.input}
              placeholder=' min'
              mode='outlined'
              underlineColor='#86c77f'
              onChangeText={(input) => setInput(input)}
              value={input} />

            <CountdownCircleTimer
              {...timerProps}
              key={key}
              size={230}
              strokeWidth={14}
              trailColor='#fff'

              isPlaying
              duration={hourSeconds}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}

              onComplete={() => {
                if (playing) playSound()
                setPlaying(false)
                setMins(mins + Number(input))
                setTimes(times + 1)
                return [false, 0]
              }}
            >
              {renderTime}
            </CountdownCircleTimer>

            <Button
              onPress={() => {


                Keyboard.dismiss
                setKey(prevKey => prevKey + 1)
                setPlaying(true)
              }}

              title={!playing ? 'Play' : 'Restart'} />



          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linkku: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  remainingTime: {
    fontSize: 46,
  },
  input: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: 18,
    width: 100,


  }
});
