import 'react-native-gesture-handler';
import React from "react";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

// import BottomTabNavigator from "./navigation/TabNavigator";
// import { MainStackNavigator } from "./navigation/StackNavigator";

 const App = () => {
  return (
    <NavigationContainer>
     <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App