import React, { useState } from 'react';
import { View, ScrollView, Button, StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import SelectAlerte from '../Components/FormSelectAlerte';
import DescriptionInput from '../Components/DescriptionInput';
import MapView from '../Components/Mapview';
import DateHeure from '../Components/DateHeure';
import Photo from '../Components/Photo';
import InputPersonne from '../Components/InputPersonne';
import ButtonSubmit from '../Components/ButtonSubmit';
import * as MailComposer from 'expo-mail-composer';

export default function Formulaire() {


  const [formInputData, setFormInputData] = useState({
    typeAlerte: '',
    incidentDescription: '',
    adresse: '',
    date: '',
    time: '',
    imageUri: '',
    Nom: '',
    Prenom: '',
    Mail: ''
  })

  const handleInputChange = (fieldName, value) => {

    setFormInputData({ ...formInputData, [fieldName]: value });
  };

  const onSubmit = () => {

    const { typeAlerte, incidentDescription, Adresse, date, time, imageUri, Nom, Prenom, Mail } = formInputData;

    if(typeAlerte.trim()===''  || incidentDescription.trim()===''  || Adresse.trim()===''  || Nom.trim()===''  || Prenom.trim()===''  || Mail.trim()===''   ){

      alert('Veuillez remplir tous les champs');

    } else {

      const { typeAlerte, incidentDescription, Adresse, date, time, imageUri, Nom, Prenom, Mail } = formInputData;


      console.log("Alerte:", typeAlerte);
      console.log("Incident Description:", incidentDescription);
      console.log("Adresse:", Adresse);
      console.log("Date:", date);
      console.log("Time:", time);
      console.log("Image URI:", imageUri);
      console.log("Nom:", Nom);
      console.log("Prenom:", Prenom);
      console.log("Mail:", Mail);

      let recipientEmail='';

      if(typeAlerte==='Voirie'  || typeAlerte==='Stationnement'  || typeAlerte==='Travaux'   ){

        recipientEmail= 'rasolovalerie@gmail.com';

      }

      if(typeAlerte==='Accidents'  || typeAlerte==='Danger' ){

        recipientEmail='matchingsmiles@gmail.com';

      }

      sendEmail (formInputData,recipientEmail);
    }


  };


  const sendEmail  = async (formInputData, recipientEmail) => {

    const attachmentUri = formInputData.imageUri;

    try {

      const isAvailable = await MailComposer.isAvailableAsync();


      if (isAvailable) {

      await MailComposer.composeAsync({
        subject: 'Mail d\'alertes - SimplonVille',
        recipients: [recipientEmail], 
        ccRecipients: [], 
        bccRecipients: ['rasolovalerie@gmail.com'], 
        body: `
        Alerte: ${formInputData.typeAlerte}
        Incident Description: ${formInputData.incidentDescription}
        Adresse: ${formInputData.Adresse}
        Date:${formInputData.date}
        Time: ${formInputData.time}
        Nom: ${formInputData.Nom}
        Prenom: ${formInputData.Prenom}
        Mail: ${formInputData.Mail}
      `,
        isHTML: false,
        attachments: [ attachmentUri],
      });


      } else {
      // Handle the case where the device doesn't support sending emails
      console.log('Email is not available on this device');
    }

  } catch (error) {
    // Handle any errors that occurred during the email composition
    console.error(error);
  }
}

  const handleScreenPress = () => {

    Keyboard.dismiss();

  };

  return (
    <ScrollView bounces="false" >

      <TouchableWithoutFeedback onPress={handleScreenPress}>

        <SafeAreaView >
          <View style={styles.container}>

            <View style={styles.Select}>
              <SelectAlerte typeAlerte={formInputData.typeAlerte} handleInputChange={(value) => handleInputChange('typeAlerte', value)}></SelectAlerte>
            </View>

            <View>
              <DescriptionInput incidentDescription={formInputData.incidentDescription} handleInputChange={(value) => handleInputChange('incidentDescription', value)}></DescriptionInput>
            </View>

            <MapView Adresse={formInputData.adresse} handleInputChange={(fieldName, value) => handleInputChange(fieldName, value)}></MapView>

            <View>

              <DateHeure
                date={formInputData.date}
                time={formInputData.time}
                handleInputChange={(fieldName, value) => handleInputChange(fieldName, value)}
              />

            </View>

            <View>
              <Photo imageUri={formInputData.imageUri} handleInputChange={(fieldName, value) => handleInputChange(fieldName,value)}></Photo>
            </View>

            <View>
              <InputPersonne
                Nom={formInputData.Nom}
                Prenom={formInputData.Prenom}
                Mail={formInputData.Mail}
                handleInputChange={(fieldName, value) => handleInputChange(fieldName, value)}></InputPersonne>
            </View>

            <ButtonSubmit theme="primary" label="Envoyer" onPress={() => onSubmit()} />

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
    padding: 10,

  },
  container: {
    backgroundColor: '#CFEBF4',
    margin: 20,
    padding: 20,
    borderRadius: 10,

  }

})
