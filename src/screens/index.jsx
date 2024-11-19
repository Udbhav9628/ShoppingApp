import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import products from '../assets/data.json';

const Index = () => {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <View>
                    <Text>{item.id}</Text>
                </View>}
            />
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({})