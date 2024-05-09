import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import userContext from "../../context/userContext";
import { COLORS } from "../../constants/colors";

export default function Card({ children, title }) {
  const { darkMode, setDarkMode } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? COLORS.SECONDARY_DARK : "white" },
      ]}
    >
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        {title}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
    margin: 10,
  },
});
