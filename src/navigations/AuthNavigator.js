import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import {Text,View} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login/Index"
import Register from "../screens/Register/Index"
import { LOGIN, REGISTER } from "../constants/RouteNmes"





const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={LOGIN} component={Login} ></AuthStack.Screen>
        <AuthStack.Screen name={REGISTER} component={Register} ></AuthStack.Screen>
    </AuthStack.Navigator>
}

export default AuthNavigator;