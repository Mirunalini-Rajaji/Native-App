import React, { useState } from "react";
import { styles } from "../../globalStyle/style";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function SignInComponent({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [pwd, setPwd] = useState('')
    const [field,setField] = useState(false);

    let fNameChange = (value) => {
        setField(false)
        setFirstName(value)
    }
    let lNameChange = (value) => {
        setField(false)
        setLastName(value)
    }
    let emailChange = (value) => {
        setField(false)
        setEmail(value)
    }
    let pwdChange = (value) => {
        setField(false)
        setPwd(value)
    }
    const submit = (firstName, lastName, emailAddress, pwd) => {
        if(firstName===''||lastName===''||emailAddress===''||pwd===''){
            setField(true)
        }
        if(firstName!==''&&lastName!==''&&emailAddress!==''&&pwd!==''){
        let user = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            pwd: pwd
        }
        Axios.post('http://localhost:4000/newuser', user).then(response => {
            navigation.navigate('Inventory')
        })
    }
}

    return (
        <View style={styles.containerStyle}>
        <ScrollView>
        {field &&
         <View style={styles.containerStyle}>

        <Text style={styles.productStyle}>Fill all details</Text>
        </View>}
        <View style={styles.containerStyle}><br></br>
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
                onPress={() => submit(firstName, lastName, emailAddress, pwd)}>
                <Text style={styles.button}>SignUp</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
        </View>
    )
}