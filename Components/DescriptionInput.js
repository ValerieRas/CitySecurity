import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function DescriptionInput({ handleInputChange, incidentDescription }) {

  const [value, onChangeText] = React.useState('');

  return (


    <TextInput
      style={styles.input}
      placeholder="Description de l'incident"
      editable
      multiline
      numberOfLines={4}
      maxLength={40}
      onChangeText={(text) => {
        handleInputChange(text);
        onChangeText(text);
      }}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
});

;