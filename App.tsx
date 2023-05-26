import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/stackNavigator";
import DrawerNavigator from "./src/navigators/drawerNavigator";
//import DrawerNavigator from "./src/navigators/drawerNavigator";
import OwnerContextProvider from "./src/context/ownerContext";
function App() {
  return(
  <StackNavigator/>
  )
}

export default App;
