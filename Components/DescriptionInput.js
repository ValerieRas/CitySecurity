import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const DescriptionInput= () => {
  
  const [value, onChangeText] = React.useState('');


  return (
      <TextInput
        style={styles.input}
        placeholder="Description de l'incident"
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default DescriptionInput;