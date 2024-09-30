import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  BackHandler,
  SafeAreaView,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTopSection from "../components/Home/HomeTopSection";
import IpAddressSection from "../components/Home/IpAddressSection";
import Card from "../components/Home/Card";
import { ScrollView } from "react-native";
import { sendHttpRequest } from "../helper/RequestHelper";
import userContext from "../context/userContext";
import { COLORS } from "../constants/colors";

const Tab = createBottomTabNavigator();
export default function Home({ navigation }) {
  const { darkMode, setDarkMode, networkIp } = useContext(userContext);
  if (darkMode) {
    NavigationBar.setBackgroundColorAsync(COLORS.PRIMARY_DARK);
  } else {
    NavigationBar.setBackgroundColorAsync("white");
  }
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        BackHandler.exitApp();
        // return true; // Return true to prevent default behavior (exit the app)
      }
    );

    return () => backHandler.remove(); // Remove the event listener when component unmounts
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
        ]}
      >
        <HomeTopSection />
        <IpAddressSection />
        <View style={styles.cardSection}>
          <Card
            title={"Pepper Farm"}
            image={require(`../../assets/images/image1.jpeg`)}
            click={(status) => {
              sendHttpRequest(`${networkIp}/${"Relay1"}${status}`);
            }}
          />
          <Card
            title={"Carrot Farm"}
            image={require(`../../assets/images/image2.jpg`)}
            click={(status) => {
              sendHttpRequest(`${networkIp}/${"Relay2"}${status}`);
            }}
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor={darkMode ? COLORS.PRIMARY_DARK : "white"}
        barStyle={darkMode ? "light-content" : "dark-content"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  cardSection: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
});
