import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AddToCart = () => {
    const imageSource = require('../assets/products/101_1.jpg');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cart</Text>
            </View>

            <View style={styles.itemContainer}>
                <Image
                    source={imageSource} // Replace with your image URL
                    style={styles.productImage}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>Crazy Monkey Grey</Text>
                    <Text style={styles.productSize}>Size: L / XL</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityButton}>
                            <Text style={styles.quantityText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>1</Text>
                        <TouchableOpacity style={styles.quantityButton}>
                            <Text style={styles.quantityText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.productPrice}>$134.90</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.subtotalLabel}>SUBTOTAL</Text>
                <Text style={styles.subtotalValue}>$134.90</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
});

export default AddToCart;
