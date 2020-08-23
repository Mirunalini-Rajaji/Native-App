import React, { useState } from "react";
import { styles } from "../globalStyle/style";
import { View, Text, TouchableOpacity,TextInput } from "react-native";
import Axios from "axios";

export default function SignInComponent({navigation}){
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[pwd,setPwd]=useState('')

    let fNameChange=(value)=>{
        setFirstName(value)
    }
    let lNameChange=(value)=>{
        setLastName(value)
    }
    let emailChange=(value)=>{
        setEmail(value)
    }
    let pwdChange=(value)=>{
        setPwd(value)
    }
    const submit=(firstName,lastName,email,pwd)=>{
        let user={
            firstName:firstName,
            lastName:lastName,
            email:email,
            pwd:pwd
        }
        Axios.post('http://localhost:3000/users',user).then(response=>{
           navigation.navigate('Inventory')
        })
    }

    return(
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>SignUp</Text>
            <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="FirstName" 
            placeholderTextColor="#8690b8"
            onChangeText={fNameChange}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="LastName" 
            placeholderTextColor="#8690b8"
            onChangeText={lNameChange}
            />
        </View>
           
            <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email Address" 
            placeholderTextColor="#8690b8"
            onChangeText={emailChange}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
          secureTextEntry
            style={styles.inputText}
            placeholder="password" 
            placeholderTextColor="#8690b8"
            onChangeText={pwdChange}
            />
        </View>
            <TouchableOpacity style={styles.lgnbutton}
                              onPress={()=>submit(firstName,lastName,email,pwd)}      >
                <Text style={styles.button}>SignUp</Text>
            </TouchableOpacity>
          
        </View>
    )
}