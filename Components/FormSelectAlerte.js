import React from 'react';
import SelectDropdown from 'react-native-select-dropdown'


export default function SelectAlerte({handleInputChange, typeAlerte}) {

    const TypeAlerte = ["Voirie", "Stationnement", "Travaux", "Accidents", "Danger"];



    return (

        <SelectDropdown
        data={TypeAlerte}
        defaultButtonText={"Type d'alerte"}
        dropdownStyle={{ backgroundColor: 'lightgray' }} 
        buttonStyle={{ backgroundColor: '#ffd33d',  width: 340, height: 40 ,   borderRadius: 10}}    
        rowStyle={{ borderBottomColor: 'gray', borderBottomWidth: 1, borderRadius: 10 }}
        buttonTextStyle={{ fontSize: 16, color:'grey'}}
        onSelect={(selectedItem, index) => {
            handleInputChange(selectedItem);
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