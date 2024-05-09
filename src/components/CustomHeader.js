import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDown from "./DropDown.js";
import { useContext } from "react";
import userContext from "../context/userContext.js";

export default function CustomHeader() {
  const menuIcon = require("../../assets/menu.svg");
  const { darkMode, setDarkMode } = useContext(userContext);
  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
        ]}
      >
        <TouchableOpacity style={styles.menu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.textColumn}>
          <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
            Hello Amos
          </Text>
          <Text style={styles.des}>Welcome Back</Text>
        </View>
        <TouchableOpacity style={styles.dropDownButton}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={darkMode ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
    // Dropdown Button
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 70,
    elevation: 1, // For the 0px 1px 0px shadow
    shadowColor: "rgba(17, 17, 26, 0.1)", // Shadow color
    backgroundColor: "white", // Background color
    borderRadius: 10, // Sample border radius
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textColumn: {
    padding: 5,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    color: COLORS.TEXT_PRIMARY,
  },
  des: {
    fontWeight: "600",
    fontWeight: "bold",
    color: COLORS.TEXT_SECONDARY,
  },
  dropDownButton: {
    width: 20,
    height: 30,
    position: "absolute",
    right: 0,
    marginHorizontal: 20,
  },
  DropDownWrap: {
    position: "absolute",
    flex: 1,
  },
});
