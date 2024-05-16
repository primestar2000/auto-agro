import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import userContext from "./src/context/userContext";
import HomeTabs from "./src/navigation/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [networkStatus, setNetworkStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [networkIp, setNetworkIp] = useState("");

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Item set successfully!");
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  const getItem = async (key) => {
    try {
      const item = await AsyncStorage.getItem(key);
      if (item !== null) {
        console.log(`Item retrieved successfully for key ${key}:`, item);
        if (key === "ipAddress") setNetworkIp(item);
        if (key === "darkMode") setDarkMode(item === "true");
      } else {
        console.log(`Item not found in AsyncStorage for key ${key}.`);
      }
    } catch (error) {
      console.error("Error getting item:", error);
    }
  };
  useEffect(() => {
    getItem("ipAddress");
    getItem("darkMode");
  }, []);

  useEffect(() => {
    if (networkIp !== "") setItem("ipAddress", networkIp);
  }, [networkIp]);

  useEffect(() => {
    setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <userContext.Provider
      value={{
        darkMode,
        setDarkMode,
        networkStatus,
        setNetworkStatus,
        networkIp,
        setNetworkIp,
      }}
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
