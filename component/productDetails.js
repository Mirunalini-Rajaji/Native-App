import React from 'react';
import {View,Text} from 'react-native'
import {styles} from '../globalStyle/style'
export default function ProductDetailsComponent(item){
    const data=item.route.params.item
    return(
        <View style={styles.containerStyle}>
            
                {/* <Text style={styles.textStyle}>Product Details</Text> */}
            <Text style={styles.nameStyle}>{data.name}</Text>
            <Text style={styles.productStyle}>Price:{data.price}</Text>
            <Text style={styles.productStyle}>Quantity:{data.quantity}</Text>
            <Text style={styles.productStyle}>Category:{data.category}</Text>
           
        </View>
    )
}