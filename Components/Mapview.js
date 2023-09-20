import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';


// Set your Geocoding API key (get one from Google)
const API_KEY = '9ca520b4cfb04744aeca8b8c09e3b031';



export default function App() {

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});


      setLocation(location.coords);

      setMarkerPosition(location.coords);

      getAddressForCoordinate(location.coords);

    })();
  }, []);

  //Function to get adress 
  const getAddressForCoordinate = (location) => {
    (async () => {
      if (location) {
        try {

          // Use Geoapify API for reverse geocoding
          const geoapifyEndpoint = `https://api.geoapify.com/v1/geocode/reverse?lat=${location.latitude}&lon=${location.longitude}&apiKey=${API_KEY}`;

          //console.log(geoapifyEndpoint);

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
  }

  // Function to handle map tap
  const handleMapTap = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
    getAddressForCoordinate(e.nativeEvent.coordinate);
  };

  //funtion search
  const onSearch = async () => {
    try {

      const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=${API_KEY}`);

      console.log(`https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=${API_KEY}`);

      const data = await response.json();

      //const responseString = JSON.stringify(data.features[0]); 

      //console.log('Geoapify API Response:', responseString); 

      if (data.features && data.features.length > 0) {
        const firstFeature = data.features[0];
        const { lat, lon } = firstFeature.geometry.coordinates;

        setLocation({ latitude: lat, longitude: lon });
        setMarkerPosition({ latitude: lat, longitude: lon });

      }

    } catch (error) {
      console.error('Error geocoding address:', error);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder={address}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Button title="Search" onPress={onSearch} />
      </View>

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
          onPress={(e) => handleMapTap(e)}
        >
          <Marker
            coordinate={markerPosition}
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
    margin: 10,
    width:390,
    height: 400,
  },
  addressText: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  search:{
    flexDirection: 'row',
  },
  input:{
    width:300,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
  }
});
