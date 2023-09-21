import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, Text, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DateTime() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const handleInputFocus = () => {
    setShowTimePicker(true);
  };

  return (
    <View style={styles.container}>
      <Text>Date</Text>
      <TextInput
        onFocus={handleInputFocus}
        value={date}
        editable={false}
      />
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
      <Text>Heure</Text>
      <TextInput
        onFocus={handleInputFocus}
        value={time}
        editable={false}
      />
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeTime}
          editable={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    },
  
  })
