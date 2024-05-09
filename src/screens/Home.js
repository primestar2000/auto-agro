import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler } from "react-native";
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

  const { darkMode, setDarkMode } = useContext(userContext);
  return (
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
          image={require(`../../assets/images/image1.jpeg`)}
          click={(status) => {
            sendHttpRequest(`${"Relay4"}${status}`);
          }}
        />
        <Card
          image={require(`../../assets/images/image2.jpg`)}
          click={(status) => {
            sendHttpRequest(`${"Relay4"}${status}`);
          }}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
