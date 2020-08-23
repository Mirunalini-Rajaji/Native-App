import React,{useState} from 'react';

import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function AddFriend(){
    const[friendName,setFriendName] = useState('')

    const captureFriend=(value)=>{
        setFriendName(value)
    }
    return(
        <View style={mystyles.input}>
            <TextInput style={mystyles.input}
            placeholder='add name'
            onChangeText={captureFriend}
            ></TextInput>
            <Button style={mystyles.input}
                title="Add"
                onPress={()=>addFriend}
            >
             </Button>
        </View>
    )
}
const mystyles=StyleSheet.create({
    input:{
        fontWeight:'bold',
        paddingTop:50,
        paddingLeft:120,
        textAlign:'center',
        
    }
})