import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimePickerComponent() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true); // Show date picker by default
  const [showTimePicker, setShowTimePicker] = useState(true); // Show time picker by default

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
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
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
            editable={false}
          />
        )}
      </View>

      <View style={styles.row}>
        <Text>Time:</Text>
        {showTimePicker && (
          <DateTimePicker
            testID="timePicker"
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
            editable={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    flexDirection: 'row', 
    alignItems: 'center',  
  },
  row: {
    flexDirection: 'row',   
    alignItems: 'center',  
    marginRight: 45,       
  },
});

