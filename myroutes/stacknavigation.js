import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from '@react-navigation/native'
import LoginComponent from '../component/login/login'
import SignInComponent from '../component/signup/signup';
import ProductComponent from '../component/product/products';
import AddProductComponent from '../component/product/addProduct';
import ProductDetailsComponent from '../component/product/productDetails';
import EditProductComponent from '../component/product/editProduct';

const Stack = createStackNavigator()

function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inventory'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: 'white',
                        height: 80,

                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'my-custom-font'
                    }
                }}
                headerMode='float'>
                <Stack.Screen name="Inventory" component={LoginComponent}></Stack.Screen>
                <Stack.Screen name="Signup" component={SignInComponent}></Stack.Screen>
                <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen>
                <Stack.Screen name="EditProduct" component={EditProductComponent}></Stack.Screen>
                <Stack.Screen name="Products" component={ProductComponent}></Stack.Screen>
                <Stack.Screen name="ProductDetails" component={ProductDetailsComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )


}
export default StackNavigation
