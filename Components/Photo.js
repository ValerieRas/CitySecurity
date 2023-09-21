import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent() {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access media library denied');
      }

      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (cameraStatus.status !== 'granted') {
        console.error('Permission to access the camera denied');
      }
    })();
  }, []);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled){
      setImageUri(result.assets[0].uri);
    }



  
  };

  const handleCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled){
      setImageUri(result.assets[0].uri);
    }

  };


  const DeletePhoto = async () =>{
    setImageUri(null);
  }


  return (
    <View >
        <View style={styles.ButtonContainer}>
            <Button style={styles.button} title="Galerie" onPress={handleImagePicker}/>
            <Button style={styles.button} title="Appareil photo" onPress={handleCamera}/>
            <Button style={styles.button} title="Supprimer" onPress={DeletePhoto}/>
        </View>
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
      )}


    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 330,
    height: 300,
  },
  ButtonContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    width: 10,
    
  }
});

