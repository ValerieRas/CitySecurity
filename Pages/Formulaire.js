import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView} from 'react-native';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import SelectAlerte from '../Components/FormSelectAlerte';
import DescriptionInput from '../Components/DescriptionInput';
import MapView from '../Components/Mapview';

export default function Formulaire() {

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    // Handle form submission here
    console.log(data);
  };
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <SelectAlerte ></SelectAlerte>
      </View>
      <DescriptionInput></DescriptionInput>
      <MapView></MapView>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:10
  },

})
