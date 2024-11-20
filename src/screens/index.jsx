import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import allItems from '../assets/data.json';
import ItemCards from '../components/ItemCards';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

const Index = () => {
    const {products} = useSelector(state=> state.products)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <Header/>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => <ItemCards item={item} />}
            />
        </SafeAreaView>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
