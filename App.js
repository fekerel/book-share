import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BooksScreen from './screens/BooksScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'KitapPaylaş' }} />
                <Stack.Screen name="Books" component={BooksScreen} options={{ title: 'Kitaplar' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
