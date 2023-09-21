import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';

const DescriptionInput = () => {

    const [Nom, onChangeNom] = React.useState('');
    const [Prenom, onChangePrenom] = React.useState('');
    const [Mail, onChangeMail] = React.useState('');

    return (

        <View>
        <TextInput
            label="Nom"
            style={styles.input}
            placeholder="Nom"
            editable
            onChangeText={text => onChangeNom(text)}
            value={Nom}
        />


        <TextInput
            label="Prenom"
            style={styles.input}
            placeholder="Prenom"
            editable
            onChangeText={text => onChangePrenom(text)}
            value={Prenom}
        /> 

        <TextInput
            label="Mail"
            style={styles.input}
            placeholder="Mail"
            editable
            onChangeText={text => onChangeMail(text)}
            value={Mail}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
    },
});

export default DescriptionInput;