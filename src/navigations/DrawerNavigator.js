import React from "react"

import SideMenu from './SideMenu/'
import { createDrawerNavigator } from "@react-navigation/drawer"
import AuthNavigator from "./AuthNavigator"
import { AUTHNAVIGATOR, HOME_NAVIGATOR } from "../constants/RouteNmes"
import HomeNavigator from "./HomeNavigator"
import { GlobalContext } from "../context/Provide"

const getDrawerContent = (navigation, authDispatch) => {
    return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
  };

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();
    const {authDispatch} = React.useContext(GlobalContext);

    return (
        <Drawer.Navigator
            drawerType="slide"
            drawerContent={({navigation}) =>
            getDrawerContent(navigation, authDispatch)
        }>
            {/* <Drawer.Screen name={AUTHNAVIGATOR} component={AuthNavigator} ></Drawer.Screen> */}
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} ></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;