import React, { useState, useEffect } from 'react';
import { styles } from "../../globalStyle/style";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";
export default function EditProductComponent(item, { navigation }) {
    const data = item.route.params.item
    const [name, setname] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [field,setField] = useState(false);

    let namevalue = (value) => {
        setField(false)
        setname(value)
    }
    let priceValue = (value) => {
        setField(false)
        setPrice(value)
    }
    let quantityValue = (value) => {
        setField(false)
        setQuantity(value)
    }
    let categoryValue = (value) => {
        setField(false)
        setCategory(value)
    }
    let imageValue = (value) => {
        setField(false)
        setImage(value)
    }

    useEffect(() => {
        setname(data.name)
        setPrice(data.price)
        setQuantity(data.quantity)
        setCategory(data.category)
        setImage(data.image)
    }, [])
    const submitHandler = (name, price, quantity, category, image) => {
        if(name===''||price===''||quantity===''||category===''||image===''){
            setField(true)
        }
        if(name!==''&&price!==''&&quantity!==''&&category!==''&&image!==''){
        let product = {
            name: name,
            price: price,
            quantity: quantity,
            category: category,
            image: image
        }
        Axios.put("http://localhost:3000/allProducts/" + data.id, product).then(response => {
            console.log(data.id)
            item.navigation.navigate('Products')
        })
    }
}
    return (
        <ScrollView>
        {field &&
         <View style={styles.containerStyle}>

        <Text style={styles.productStyle}>Fill all details</Text>
        </View>}
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Edit Product</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Product Name"
                    placeholderTextColor="#8690b8"
                    onChangeText={namevalue}
                    value={name}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    keyboardType={"numeric"}
                    style={styles.inputText}
                    placeholder="Price"
                    placeholderTextColor="#8690b8"
                    onChangeText={priceValue}
                    value={price}
                />
            </View>

            <View style={styles.inputView} >
                <TextInput
                    keyboardType={"numeric"}
                    style={styles.inputText}
                    placeholder="Quantity"
                    placeholderTextColor="#8690b8"
                    onChangeText={quantityValue}
                    value={quantity}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput

                    style={styles.inputText}
                    placeholder="Category"
                    placeholderTextColor="#8690b8"
                    onChangeText={categoryValue}
                    value={category}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput

                    style={styles.inputText}
                    placeholder="Image Url"
                    placeholderTextColor="#8690b8"
                    onChangeText={imageValue}
                    value={image}
                />
            </View>
            <TouchableOpacity style={styles.lgnbutton}
                onPress={() => submitHandler(name, price, quantity, category, image)} >
                <Text style={styles.button}>Update</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    )

}