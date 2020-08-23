import React, { useState } from "react";
import { styles } from "../globalStyle/style";
import { View, Text, TouchableOpacity,TextInput } from "react-native";
import Axios from "axios";

export default function AddProductComponent({navigation}){
    const[name,setname]=useState('');
    const[price,setPrice]=useState('');
    const[quantity,setQuantity]=useState('');
    const[category,setCategory]=useState('');
    
    let namevalue=(value)=>{
        setname(value)
    }
    let priceValue=(value)=>{
        setPrice(value)
    }
    let quantityValue=(value)=>{
        setQuantity(value)
    }
    let categoryValue=(value)=>{
        setCategory(value)
    }
    const submitHandler=(name,price,quantity,category)=>{
        let product={
            name:name,
            price:price,
            quantity:quantity,
            category:category
        }
        Axios.post('http://localhost:3000/allProducts',product).then(response=>{
            navigation.navigate('Products')
        })
    }
    return(
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
        <View style={styles.inputView} >
          <TextInput  
          
            style={styles.inputText}
            placeholder="Category" 
            placeholderTextColor="#8690b8"
            onChangeText={categoryValue}
            />
        </View>
            <TouchableOpacity style={styles.lgnbutton}
                              onPress={()=>submitHandler(name,price,quantity,category)} > 
                 <Text style={styles.button}>Add</Text>
            </TouchableOpacity>
          
        </View>
    )
}