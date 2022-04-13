import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import {Text,View} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ADD_NEW_TRACK, TRACKING_LIST, HOME_NAVIGATOR } from "../constants/RouteNmes"
import TrackingList from "../screens/TrackingList"
import addNewTrack from "../screens/AddNewTrack"

const HomeNavigator = () => { 
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteNmae={TRACKING_LIST} screenOptions={{headerShown: false}}> 
            <HomeStack.Screen name={TRACKING_LIST} component={TrackingList} ></HomeStack.Screen>
            <HomeStack.Screen name={ADD_NEW_TRACK} component={addNewTrack} ></HomeStack.Screen>
            {/* <HomeStack.Screen name="Create Contact" component={CreateContact} ></HomeStack.Screen> */}
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;