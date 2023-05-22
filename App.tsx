import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/stackNavigator";
import DrawerNavigator from "./src/navigators/drawerNavigator";
//import DrawerNavigator from "./src/navigators/drawerNavigator";
function App() {
  return <StackNavigator />;
}

export default App;
