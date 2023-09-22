import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DateTimePickerComponent({ handleInputChange, date, time }) {

  const [DateJour, setDate] = useState(new Date);
  const [TimeHeure, setTime] = useState(new Date);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(true);



  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || DateJour;
    setShowDatePicker(Platform.OS === 'ios');

      setDate(currentDate);
      handleInputChange('date', selectedDate.toLocaleDateString());
    
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || TimeHeure;
    setShowTimePicker(Platform.OS === 'ios');

      setTime(currentTime);
      handleInputChange('time', selectedTime.toLocaleTimeString());
    

  };

  useEffect(() => {
    // Hide the date and time pickers on component mount (for Android)
    setShowDatePicker(Platform.OS === 'ios');
    setShowTimePicker(Platform.OS === 'ios');

  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Date:</Text>
        {showDatePicker && (
          <DateTimePicker
            testID="datePicker"
            value={DateJour}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              onChangeDate(event, selectedDate);
            }}
            editable={false}
          />
        )}
      </View>

      <View style={styles.row}>
        <Text>Heure:</Text>
        {showTimePicker && (
          <DateTimePicker
            testID="timePicker"
            value={TimeHeure}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedTime) => {
              onChangeTime(event, selectedTime);
            }}
            editable={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
});

