import React from 'react';
import products from '../assets/data.json';
import ItemCards from '../components/ItemCards';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../components/Header';

const Index = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => <ItemCards item={item} />}
            />
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
