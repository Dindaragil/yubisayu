import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { BOOK_DETAIL, BOOK_LIST, CREATE_BOOK } from '../constans/routeNames';
import Books from '../screens/Books';
import BookDetail from '../screens/BookDetail';
import CreateBook from '../screens/CreateBook';

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator initialRouteName={BOOK_LIST}>
        <Stack.Screen name={BOOK_LIST} component={Books}></Stack.Screen>
        <Stack.Screen name={BOOK_DETAIL} component={BookDetail}></Stack.Screen>
        <Stack.Screen name={CREATE_BOOK} component={CreateBook}></Stack.Screen>
    </Stack.Navigator>)
}
export default HomeNavigator;