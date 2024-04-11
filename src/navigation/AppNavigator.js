import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreens';
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login'}}></Stack.Screen>
            {/* //<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}></Stack.Screen> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;