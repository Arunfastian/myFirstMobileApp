import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomTitleBar from "../components/customTitleBar";
import Settings from "../screens/settings";
import CountriesList from "../screens/countries";
import { StyleSheet } from "react-native";
import CustomTabButton from "../components/customTabButton";
import About from "../screens/about";
import Profile from "../screens/profile";
import Map from "../screens/map";

const Tab = createBottomTabNavigator();
const BottomNavigator = ({navigation}:any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => {
          return <CustomTitleBar navigation={navigation}/>;
        },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "black",
        tabBarStyle: styles.tabBarStyles,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={CountriesList}
        options={{
          tabBarButton: (props: any) => {
            return <CustomTabButton {...props} />;
          },
          tabBarIcon: (props) => {
            return (
              <MaterialIcons
                name="home"
                size={25}
                color={props.focused ? "black" : "white"}
              />
            );
          },      
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={props.focused ? "black" : "white"}
              />
            );
          },
          tabBarButton: (props: any) => {
            return <CustomTabButton {...props} />;
          },
        }}
        
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: (props) => {
            return (
              <MaterialIcons
                name="info"
                size={24}
                color={props.focused ? "black" : "white"}
              />
            );
          },
          tabBarButton: (props: any) => {
            return <CustomTabButton {...props} />;
          },
        }}
        
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => {
            return (
              <MaterialIcons
                name="person"
                size={24}
                color={props.focused ? "black" : "white"}
              />
            );
          },
          tabBarButton: (props: any) => {
            return <CustomTabButton {...props} />;
          },
        }}
        
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: (props) => {
            return (
              <MaterialIcons
                name="location-pin"
                size={24}
                color={props.focused ? "black" : "white"}
              />
            );
          },
          tabBarButton: (props: any) => {
            return <CustomTabButton {...props} />;
          },
        }}
        
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: "lightblue",
    height: 50,
    bottom: 20,
    marginLeft: 8,
    marginRight: 8,
  },
});
