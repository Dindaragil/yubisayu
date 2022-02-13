import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { LOGIN, REGISTER } from '../constans/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (<Stack.Navigator>
        <Stack.Screen name={LOGIN} component={Login}></Stack.Screen>
        <Stack.Screen name={REGISTER} component={Register}></Stack.Screen>
    </Stack.Navigator>)
}
export default AuthNavigator;