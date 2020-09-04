import React, { useState } from "react";
import { styles } from "../../globalStyle/style";
import { View, Text, TouchableOpacity, TextInput, Picker } from "react-native";
import Axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function AddProductComponent({ navigation }) {
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
        setImage(value.target.value.substr(12))
    }
    const submitHandler =  (name, price, quantity, category, image) => {
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
       
        Axios.post('http://localhost:3000/allProducts', product).then(response => {
            navigation.navigate('Products')
        }, [])
    }
}
    
    return (
        <ScrollView>
            {field &&
             <View style={styles.containerStyle}>

            <Text style={styles.productStyle}>Fill all details</Text>
            </View>}
           
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Add Product</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Product Name"
                    placeholderTextColor="#8690b8"
                    onChangeText={namevalue}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    keyboardType={"numeric"}
                    style={styles.inputText}
                    placeholder="Price"
                    placeholderTextColor="#8690b8"
                    onChangeText={priceValue}
                />
            </View>

            <View style={styles.inputView} >
                <TextInput
                    keyboardType={"numeric"}
                    style={styles.inputText}
                    placeholder="Quantity"
                    placeholderTextColor="#8690b8"
                    onChangeText={quantityValue}
                />
            </View>
            
                <Picker
                style={styles.dropView}
                onValueChange={categoryValue}
               
                selectedValue={category}
                >
                    <Picker.Item label="Select Category" value=""></Picker.Item>
                    <Picker.Item label="Mobiles" value="Mobiles"></Picker.Item>
                    <Picker.Item label="Electronics" value="Electronics"></Picker.Item>
                    <Picker.Item label="Dress" value="Dress"></Picker.Item>
                    <Picker.Item label="Toys" value="Toys"></Picker.Item>
                </Picker>
           
            <View style={styles.inputView} >
                <input type="file" onChange={imageValue} multiple accept='images/*'></input>
               
            </View>
            <TouchableOpacity style={styles.lgnbutton}
                onPress={() => submitHandler(name, price, quantity, category, image)} >
                <Text style={styles.button}>Add</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    )
}