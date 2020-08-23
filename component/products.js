// import React from "react";
import { styles } from "../globalStyle/style";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FlatList } from "react-native-gesture-handler";

export default function ProductComponent({ navigation }) {


    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(' http://localhost:3000/allProducts ')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    })




    return (
        <ScrollView>
            <View style={styles.container}>

                <TouchableOpacity style={styles.addbutton}
                    onPress={() => { navigation.navigate('AddProduct') }}      >
                    <Text style={styles.add}>Add Product</Text>
                </TouchableOpacity>

                <View>
                    <FlatList
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        data={products}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { item: item })}>
                                <Text style={styles.listitem}>{item.name}</Text>
                            </TouchableOpacity>
                        )}>


                    </FlatList>
                </View>
            </View>
        </ScrollView>



    )
}

