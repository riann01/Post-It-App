import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Authenticate from './pages/Authenticate';
import Register from './pages/Register';
import UserHome from './pages/UserHome';
import CreateNewAnnotation from './pages/CreateNewAnnotation';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.5)'} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Authenticate" component={Authenticate} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="UserHome" component={UserHome} />
                <Stack.Screen name="CreateNewAnnotation" component={CreateNewAnnotation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}