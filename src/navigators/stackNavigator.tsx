import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./bottomNavigator";
import CitiesList from "../screens/cites";
import CountriesList from "../screens/countries";
import Profile from "../screens/profile";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab_Navigator" component={BottomNavigator} />
        <Stack.Screen
          name="Cities"
          component={CitiesList}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: "Cities of a Country",
          }}
        />
        <Stack.Screen name="Countries" component={CountriesList} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
