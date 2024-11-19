/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dropdown from './DropDown'
const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XLL']

const Header = () => {
    return (
        <View>
            <Text>Sizes</Text>
            <FlatList
                data={availableSizes}
                contentContainerStyle={{ flexDirection: 'row', gap: 10, marginLeft: 10 }}
                keyExtractor={item => item}
                renderItem={({ item }) => <View style={{ height: 35, width: 35, borderRadius: 22, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{item}</Text>
                </View>}
            />

            <Dropdown />


        </View>
    )
}

export default Header;

// const styles = StyleSheet.create({})