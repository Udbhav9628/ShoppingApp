import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Dropdown from './DropDown';
import { availableSizes } from '../data/tshirtSizes';
import { useDispatch } from 'react-redux';
import { handleOrderBy, handleSizeSelect } from '../redux/reducers/products';
import cartImg from '../assets/products/Shopping_Cart.png'

const Header = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%'}}>
                
            <Text style={styles.label}>Sizes</Text>

<View style={{position:'relative'}}>
<Image source={cartImg} style={{
                    width:30,
                    height:30,
                    resizeMode:'contain',
                }}/>
    <View style={{height:20,
        width:20,
        borderRadius:10,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute'
    }}>
    <Text>5</Text>
    </View>
           
                </View>
            </View>

            <FlatList
                data={availableSizes}
                contentContainerStyle={styles.sizeListContainer}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(handleSizeSelect(item));
                        }}
                        style={styles.sizeButton}
                    >
                        <Text style={styles.sizeText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.label2}>12 Products Found</Text>
            <View style={{
                flexDirection:'row',
                gap:10,
                alignItems:'center'
            }}>
                <Text>Order by</Text>
            <Dropdown
                handleOrderBy={(data) => {
                    dispatch(handleOrderBy(data));
                }}
            />
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label2: {
        fontSize: 14,
        marginTop:20,
        fontWeight: '600',
        marginBottom: 10,
    },
    sizeListContainer: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 10,
    },
    sizeButton: {
        height: 35,
        width: 35,
        borderRadius: 22,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Header;