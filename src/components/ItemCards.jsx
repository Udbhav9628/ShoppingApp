import {
  View,
  Text,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React from "react";
import imageMapper from "../data/imageMapper";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd } from "../redux/reducers/shoppingCart";

const ItemCards = ({ item }) => {
  const dispatch = useDispatch();
  const { addedItems } = useSelector((state) => state.cart);

  return (
    <View style={styles.card}>
      {item.isFreeShipping && (
        <View style={styles.freeShippingBadge}>
          <Text style={styles.freeShippingText}>Free Shipping</Text>
        </View>
      )}

      <Image style={styles.image} source={imageMapper[item?.src_1]} />

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          const isAdded = addedItems.find((product) => product.id === item.id);
          if (isAdded) {
            ToastAndroid.show(
              "Item already in cart. Quantity updated.",
              ToastAndroid.SHORT
            );
          } else {
            ToastAndroid.show("Item Added", ToastAndroid.SHORT);
          }
          dispatch(handleAdd(item));
        }}
        style={styles.addToCart}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCards;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    alignItems: "center",
  },
  freeShippingBadge: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "black",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 1,
  },
  freeShippingText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  addToCart: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  addToCartText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
