/*import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';
import MapView from'react-native-maps'
import { Marker } from 'react-native-maps';


export default function Mappi({ route, navigation}) {
    const{ address} = route.params;

  

  const[region, setRegion] = useState({
    latitude: 60.10630,
    longitude: 24.56023,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121
  });

  
  
  const addressFetch = () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=gbAYLUeppr0nTE5FRGPGfXzSCmUI9SdV&location=' + address
    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      const lat = responseData.results[0].locations[0].latLng.lat;
      const long = responseData.results[0].locations[0].latLng.lng;
      setRegion({latitude: lat, longitude: lon, latitudeDelta:0.0222, longitudeDelta: 0.0121})
    });
    
  }

  return (
    <View style={styles.container}>
      <MapView 
      style = {{ flex: 5 }}
     region ={region}
        >
          <Marker 
          coordinate={{
            latitude: region.latitude, 
            longitude: region.longitude}}
            />
            </MapView>
            <View style={styles.container}>
            <Button title ="Show" onPress={addressFetch}/>
              
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

  
});*/