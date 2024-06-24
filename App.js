import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userContext from "./src/context/userContext";
import HomeTabs from "./src/navigation/navigation";
import GuestNavigation from "./src/navigation/GuestNavigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loader from "./src/components/Loader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [networkStatus, setNetworkStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [networkIp, setNetworkIp] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [globalAlertMessage, setGloabalAlertMessage] = useState({
    message: "welcome please fill in you credentials to continue",
    type: "message",
    title: "message",
  });

  useEffect(() => {
    console.log(globalAlertMessage);
  }, [globalAlertMessage]);
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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setLoggedInUser(user);
      } else {
        setLoggedInUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (networkIp !== "") setItem("ipAddress", networkIp);
  }, [networkIp]);

  useEffect(() => {
    setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <userContext.Provider
      value={{
        darkMode,
        setDarkMode,
        networkStatus,
        setNetworkStatus,
        networkIp,
        setNetworkIp,
        globalAlertMessage,
        setGloabalAlertMessage,
        loggedInUser,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          {!loggedInUser ? (
            <Stack.Screen
              name="GuestNavigation"
              component={GuestNavigation}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomeTabs"
              component={HomeTabs}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  );
}
