import React from 'react';
import { View, Text, Image } from 'react-native'
import { styles } from '../../globalStyle/style'
export default function ProductDetailsComponent(item) {
    const data = item.route.params.item
    return (
        <View style={styles.containerStyle}>

            <Text style={styles.nameStyle}>{data.name}</Text>
            <Image style={styles.imageItem} source={require(`/react/native/mynativeapp/assets/images/${data.image}`)}></Image>
            <Text style={styles.productStyle}>Price:{data.price}</Text>
            <Text style={styles.productStyle}>Quantity:{data.quantity}</Text>
            <Text style={styles.productStyle}>Category:{data.category}</Text>


        </View>
    )
}