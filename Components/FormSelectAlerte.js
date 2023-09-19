import React from 'react';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown'

export default function SelectAlerte() {

    const TypeAlerte = ["Voirie", "Stationnement", "Travaux", "Accidents", "Danger"]

    return (
        <SelectDropdown
            data={TypeAlerte}
            defaultButtonText={"Type d'alerte"}
            dropdownStyle={{ backgroundColor: 'lightgray' }} 
            buttonStyle={{ backgroundColor: 'skyblue',  width: 400, height: 40 }}    
            rowStyle={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}
            buttonTextStyle={{ fontSize: 16, color:'grey'}}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
    );
}