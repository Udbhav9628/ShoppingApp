import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ItemCards = ({ item }) => {
  const imageSource = require('../assets/products/101_1.jpg');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <Text>{item.title}</Text>
      <Text>$ {item.price}</Text>
      <TouchableOpacity style={styles.addToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCards;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '50%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  addToCart: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: 'black',
  },
  addToCartText: {
    color: 'white',
  },
});
