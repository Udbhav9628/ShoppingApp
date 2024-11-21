import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import ItemCards from '../components/ItemCards';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Index = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#f9f9f9'} barStyle={'dark-content'} />
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
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
