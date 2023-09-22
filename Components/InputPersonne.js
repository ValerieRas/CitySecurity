import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


export default function PersonneInput({ handleInputChange, Nom, Prenom, Mail}) {

    const [nom, onChangeNom] = React.useState('');
    const [prenom, onChangePrenom] = React.useState('');
    const [mail, onChangeMail] = React.useState('');


    return (

        <View>

            <TextInput
                label="Nom"
                style={styles.input}
                placeholder="Nom"
                editable
                onChangeText={(text) => {
                    handleInputChange('Nom',text);
                    onChangeNom(text);
                  }}
                value={nom}
            />



            <TextInput
                label="Prenom"
                style={styles.input}
                placeholder="Prenom"
                editable
                onChangeText={(text) => {
                    handleInputChange('Prenom',text);
                    onChangePrenom(text);
                  }}
                value={prenom}
            />



            <TextInput
                label="Mail"
                style={styles.input}
                placeholder="Mail"
                editable
                onChangeText={(text) => {
                    handleInputChange('Mail',text);
                    onChangeMail(text);
                  }}
                value={mail}
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
        borderRadius: 5,
    },
});

