import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import Button from '../Components/ButtonAccueil';

const AppIcon = require('../assets/adaptive-icon.png');

export default function WelcomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={AppIcon} styles={styles.image}></Image>
            </View>
            <Button label="Alertez-Nous !"/>
            <Text style={styles.text}>Welcome to Your App!</Text>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black', // Example text color
    },
    imageContainer: {
        flex: 1,
        width:300,
        height:300,
    },
    image: {
        width: 300,
        height: 300,
    },
});


