import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import userContext from "./src/context/userContext";
import HomeTabs from "./src/navigation/navigation";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase/firebaseConfig";
import GuestNavigation from "./src/navigation/GuestNavigation";
import AuthenticatedNavigation from "./src/navigation/AuthNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState(async () => {
    await AsyncStorage.getItem("theme");
  });
  const [user, setUser] = useState();
  // useEffect(() => {
  //   onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     // console.log(user.email);
  //     setUser(user);
  //   });
  // }, []);

  return (
    <userContext.Provider value={{ user, setUser, theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
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
              name="AuthenticatedNavigation"
              component={AuthenticatedNavigation}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  );
}
