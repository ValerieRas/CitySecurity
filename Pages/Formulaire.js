import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import SelectAlerte from '../Components/FormSelectAlerte';

export default function Formulaire() {

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    // Handle form submission here
    console.log(data);
  };
  
  return (
    <View>
      <View style={styles.container}>
      <SelectAlerte ></SelectAlerte>
      </View>
      <Controller
        name="name" // Make sure this matches the input field name
        control={control}
        defaultValue=""
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <Input
            placeholder="Enter your name"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:10
  },

})
