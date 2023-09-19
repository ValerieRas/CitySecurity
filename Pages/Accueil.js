import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import Button from '../Components/ButtonAccueil';
import { useNavigation } from '@react-navigation/native';

const AppIcon = require('../assets/icon.png');

export default function Accueil() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={AppIcon} style={styles.image}></Image>
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.text}>Bienvenue sur CitySecurity, {'\n'}la plateforme qui sécurise votre ville.</Text>
            </View >
            <View style={styles.ButtonContainer}>
                <Button theme="primary" label=" Alertez-Nous !" onPress={() => navigation.navigate('Formulaire')}/>
            </View>
            <View style={styles.FooterContainer}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    TextContainer: {
        flex: 2 / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: 'grey',
    },
    imageContainer: {
        marginTop: 200,
        flex: 1/3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250
    },
    ButtonContainer: {
        marginTop: 100,
        flex: 3/3,
    },
    FooterContainer:{
        width: 2000,
        height: 50,
        backgroundColor: "#CFEBF4"
    },
});



