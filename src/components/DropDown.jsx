import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

/// colors
/// consents

const orderByData = [
    {
        value: 'accending',
        lable: 'Lowest to Highest',
    },
    {
        value: 'descending',
        lable: 'Highest to Lowest', 
    }
];

const DropDown = handleOrderBy => {
    const [data, setData] = useState('');

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={data}
            data={orderByData}
            valueField="value"
            labelField="lable"
            placeholder="Select"
            onChange={e => {
                setData(e.value);
                handleOrderBy(e.value)
            }}
        />
    );
};

export default DropDown;

const styles = StyleSheet.create({
    dropdown: {
        // margin: 16,
        height: 30,
        width: 180,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});
