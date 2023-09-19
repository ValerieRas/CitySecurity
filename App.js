import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Accueil from './Pages/Accueil';
import Formulaire from './Pages/Formulaire';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {

        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        SplashScreen.hideAsync(); // Hide the splash screen when app is ready
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null; // Keep showing the splash screen until appIsReady is true
  }

  // When appIsReady is true, display the WelcomePage component
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen name="Acceuil" component={Accueil} options={globalNavigationOptions} />
          <Stack.Screen name="Formulaire" component={Formulaire} options={globalNavigationOptions}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const globalNavigationOptions = {
  headerStyle: {
    backgroundColor: '#CFEBF4',
  },
  headerTintColor: 'white',
};
