import React, {useEffect, useContext} from 'react';

import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigator from "./DrawerNavigator";
import {GlobalContext} from "../context/Provide";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import SplashScreen from 'react-native-splash-screen';

const AppNavContainer = () => {

      const {
        authState: {isLoggedIn},
      } = useContext(GlobalContext);
    
      const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
      const [authLoaded, setAuthLoaded] = React.useState(false);
    
      const getUser = async () => {
        try {
          const user = await AsyncStorage.getItem('user');
          if (user) {
            setAuthLoaded(true);
    
            setIsAuthenticated(true);
          } else {
            setAuthLoaded(true);
    
            setIsAuthenticated(false);
          }
        } catch (error) {}
      };
      useEffect(() => {
        getUser();
      }, [isLoggedIn]);
    
      React.useEffect(() => {
        getUser();
      }, []);

     


    return (
        <NavigationContainer>
            { isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
            {/* <DrawerNavigator /> */}
        </NavigationContainer>
    );
};

export default AppNavContainer;