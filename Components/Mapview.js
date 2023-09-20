import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker} from "react-native-maps";
import * as Location from 'expo-location';
import axios from 'axios';


// Set your Geocoding API key (get one from Google)
const API_KEY ='9ca520b4cfb04744aeca8b8c09e3b031';

export default function App() {

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});


      setLocation(location.coords);
      

      if (location) {
      try {
        
        // Use Geoapify API for reverse geocoding
        const geoapifyEndpoint = `https://api.geoapify.com/v1/geocode/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&apiKey=${API_KEY}`;

        console.log(geoapifyEndpoint);

        const response = await fetch(encodeURI(geoapifyEndpoint));

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        //const responseString = JSON.stringify(data.features[0].formatted); 

        //console.log('Geoapify API Response:', responseString); 

         // Check if 'results' array exists and has at least one item
         if (data.features && data.features.length > 0) {

          const firstResult = data.features[0];
          setAddress(firstResult.properties.formatted);
        } else {

          throw new Error('No address data found in the response');
        }

      } catch (error) {
        console.error('Error:', error.message);
      }
    }

    })();
  }, []);


  return (
    <View style={styles.container}>
       {location ? (
        <MapView
          provider="google"
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            description={address}
          />
        </MapView>
      ) : (
        <MapView
          provider="google"
          style={styles.map}
        ></MapView>
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    margin:10,
    width: 390,
    height: 200,
  },
  addressText: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
});
