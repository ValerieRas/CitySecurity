import React from 'react';
import { View, ScrollView, Button, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import SelectAlerte from '../Components/FormSelectAlerte';
import DescriptionInput from '../Components/DescriptionInput';
import MapView from '../Components/Mapview';
import DateHeure from '../Components/DateHeure';
import Photo from '../Components/Photo';
import InputPersonne from '../Components/InputPersonne';
import ButtonSubmit from '../Components/ButtonSubmit';

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
    <ScrollView bounces="false" >

    <TouchableWithoutFeedback onPress={handleScreenPress}>

      <SafeAreaView >
        <View style={styles.container}>

          <View style={styles.Select}>
            <SelectAlerte ></SelectAlerte>
          </View>

          <View>
            <DescriptionInput></DescriptionInput>
          </View>

          <MapView></MapView>

          <View>
            <DateHeure></DateHeure>
          </View>

          <View>
            <Photo></Photo>
          </View>

          <View>
            <InputPersonne></InputPersonne>
          </View>

          <ButtonSubmit theme="primary" label="Envoyer" onPress={() => onSubmit()}/>

        </View>
      </SafeAreaView>

    </TouchableWithoutFeedback>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Select: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  container:{
    backgroundColor: '#CFEBF4',
    margin:20,
    padding :20
  }

})
