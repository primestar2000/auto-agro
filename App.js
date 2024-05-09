import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import userContext from "./src/context/userContext";
import HomeTabs from "./src/navigation/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [networkStatus, setNetworkStatus] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <userContext.Provider
      value={{ darkMode, setDarkMode, networkStatus, setNetworkStatus }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeTabs"
            component={HomeTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  );
}
