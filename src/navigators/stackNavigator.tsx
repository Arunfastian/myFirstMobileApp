import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./bottomNavigator";
import CitiesList from "../screens/cites";
import CountriesList from "../screens/countries";
import Profile from "../screens/profile";
import TakePicture from "../screens/takePicture";
import OwnerContextProvider from "../context/ownerContext";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <OwnerContextProvider>
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
              headerTitleStyle: {fontSize: 14}
            }}
          />
          <Stack.Screen name="Countries" component={CountriesList} />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true, headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Take_Picture"
            component={TakePicture}
            options={{ headerShown: true, headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </OwnerContextProvider>
  );
};

export default StackNavigator;
