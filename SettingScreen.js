import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';



export default function SettingScreen({ route, navigation}) {
    const{ data} = route.params;
    return (
    <View style={styles.container}>
        <Text> History:</Text>
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
    };
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