import React, { useState } from "react";
import { styles } from "../globalStyle/style";
import { View, Text, TouchableOpacity,TextInput } from "react-native";
import Axios from "axios";

export default function LoginComponent({navigation}){
    const[email,setEmail]=useState("");
    const[pwd,setPwd]=useState("")
    let emailChange=(value)=>{
    
        setEmail(value)
    }
    let pwdChange=(value)=>{
        setPwd(value)
    }
    const submit=()=>{
        console.log(email)
       if(email!==''&&pwd!==''){
        Axios.get('http://localhost:3000/users?email='+email).then(response=>{
           
                   if(pwd===response.data[0].pwd){
                    navigation.navigate('Products')
                }
            
           
            
        })
       }
      
    }
    

    return(
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Login</Text>
           
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
                              onPress={()=>submit()}      >
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{navigation.navigate('Signup')}}      >
                <Text style={styles.button}>SignUp</Text>
            </TouchableOpacity>
        </View>
    )
    }