import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Logo from "../components/Logo";
import Keypad from "../components/Keypad";
import { COLORS } from "../constants/colors";

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo size={100} />
        <Text style={styles.companyName}>Auto Agro</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Keypad navigation={navigation} title={"Enter 4 digit Pin"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    padding: 20,
    paddingTop: 40,
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: "900",
    marginTop: 10,
    color: COLORS.TEXT_SECONDARY,
  },
  companyName: {
    fontSize: 30,
    color: COLORS.PRIMARY,
  },
});
