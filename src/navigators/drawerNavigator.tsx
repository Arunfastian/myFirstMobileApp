import React from 'react'
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/profile';
import About from '../screens/about';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Profile" component={Profile}/>
                <Drawer.Screen name="About" component={About}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;