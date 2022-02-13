import 'react-native-gesture-handler';
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';

const AppNavContainer = () => {
    const {authState: {isLoggedIn}} = useContext(GlobalContext)
    console.log(isLoggedIn, "ini status loginnya")
    return (
        <NavigationContainer>
            {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}
export default AppNavContainer;