import { styles } from "../globalStyle/style";
import { useIsFocused } from '@react-navigation/native'
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Button } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FlatList } from "react-native-gesture-handler";


export default function ProductComponent({ navigation }) {

    const focused = useIsFocused()
    const [products, setProducts] = useState([])
    const [searchList, setSearchList] = useState([])

    const getAllProducts = () => {
        axios.get(' http://localhost:3000/allProducts ')
            .then(res => {

                setProducts(res.data);
                setSearchList(res.data)
            })

    }
    useEffect(() => {
        getAllProducts()

    }, [focused])


    const searchValue = (value) => {
        let searchV = searchList.filter(s => {
            return( s.name.toLowerCase().match(value.toLowerCase().trim())||
                    s.category.toLowerCase().match(value.toLowerCase().trim()))

        })
        setProducts(searchV)
    }

    const deleteById = (id) => {
        console.log(id)
        axios.delete("http://localhost:3000/allProducts/" + id)
            .then(res => {
                getAllProducts()

            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <Button title="Add Product" color="#465881"
                    onPress={() => { navigation.navigate('AddProduct') }}>
                  
                </Button>
                <View style={styles.searchView} >
                    <TextInput
                        style={styles.searchText}
                        placeholder="Search"
                        placeholderTextColor='white'
                        onChangeText={searchValue}
                    />
                </View>

                <View >
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={products}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { item: item })}>
                                <View style={styles.listitem}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Image style={styles.imageItem} source={{ uri: item.image }} />
                                    <Button onPress={() => navigation.navigate('EditProduct', { item: item })} title="Edit" color="#003f5c"></Button><br></br>
                                    <Button onPress={() => deleteById(item.id)} title="Delete" color="#003f5c"></Button>
                                   
                                </View>

                            </TouchableOpacity>
                        )}>


                    </FlatList>
                </View>
            </View>
        </ScrollView>



    )
}

