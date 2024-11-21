import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import imageMapper from '../data/imageMapper';
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleDecreaseQty } from '../redux/reducers/shoppingCart';

const AddToCart = () => {
  const dispatch = useDispatch();
  const { addedItems, subTotal } = useSelector((state) => state.cart);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <FlatList
        data={addedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={imageMapper[item?.src_1]}
              style={styles.productImage}
            />
            <View style={styles.detailsContainer}>
              <Text numberOfLines={1} style={styles.productName}>
                {item.title}
              </Text>
              <Text style={styles.productSize}>Size: L / XL</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => {
                    if (item.quantity > 1) {
                      dispatch(handleDecreaseQty(item));
                    }
                  }}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(handleAdd(item));
                  }}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.productPrice}>
              ${(item.quantity * item.price).toFixed(2)}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyComp}>
            <Text style={styles.checkoutText}>Add Some Item</Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <Text style={styles.subtotalLabel}>SUBTOTAL</Text>
        <Text style={styles.subtotalValue}>${subTotal.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
  },
  productName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSize: {
    color: '#aaa',
    fontSize: 14,
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: '#333',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    color: '#fff',
    fontSize: 18,
  },
  quantity: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 8,
  },
  productPrice: {
    color: '#ff0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
  },
  subtotalLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  subtotalValue: {
    color: '#ff0',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  checkoutButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyComp: {
    marginTop: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
