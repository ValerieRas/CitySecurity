import React from 'react';
import { View, ScrollView, Button, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import SelectAlerte from '../Components/FormSelectAlerte';
import DescriptionInput from '../Components/DescriptionInput';
import MapView from '../Components/Mapview';
import DateHeure from '../Components/DateHeure';
import Photo from '../Components/Photo';

export default function Formulaire() {

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    // Handle form submission here
    console.log(data);
  };

  const handleScreenPress = () => {
    // Call Keyboard.dismiss() to close the keyboard
    Keyboard.dismiss();
  };

  return (
  
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <SelectAlerte ></SelectAlerte>
          </View>
          <DescriptionInput></DescriptionInput>
          <MapView></MapView>
          <DateHeure></DateHeure>
          <Photo></Photo>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

})
