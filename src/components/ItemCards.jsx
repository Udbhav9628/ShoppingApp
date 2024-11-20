import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imageMapper from '../data/imageMapper'
import { useNavigation } from '@react-navigation/native';

const ItemCards = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageMapper[item?.src_1]} />
      <Text>{item.title}</Text>
      <Text>$ {item.price}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('addToCart')} style={styles.addToCart}>
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
