import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Dropdown from './DropDown';
import { availableSizes } from '../data/tshirtSizes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import cartImg from '../assets/products/Shopping_Cart.png';
import { handleOrderBy, handleSizeSelect } from '../redux/reducers/products';

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { addedItems } = useSelector((state) => state.cart);
  const { selectedSize, products } = useSelector((state) => state.products);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>Sizes</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('addToCart')}
          style={styles.cartContainer}
        >
          <Image source={cartImg} style={styles.cartImage} />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{addedItems?.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={availableSizes}
        contentContainerStyle={styles.sizeListContainer}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(handleSizeSelect(item));
            }}
            style={[
              styles.sizeButton,
              { backgroundColor: item === selectedSize ? 'black' : '#ccc' },
            ]}
          >
            <Text style={styles.sizeText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.label2}>{products?.length || 0} Products Found</Text>

      <View style={styles.orderByContainer}>
        <Text style={styles.orderLabel}>Order by</Text>
        <Dropdown
          handleOrderBy={(data) => {
            dispatch(handleOrderBy(data));
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartContainer: {
    position: 'relative',
  },
  cartImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  sizeListContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  sizeButton: {
    height: 35,
    width: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  label2: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: '600',
    color: '#555',
  },
  orderByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  orderLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});
