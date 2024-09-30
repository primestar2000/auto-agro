import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDown from "./DropDown.js";
import { useContext } from "react";
import userContext from "../context/userContext.js";
import { Feather } from "@expo/vector-icons";
export default function CustomHeader() {
  const menuIcon = require("../../assets/menu.svg");
  const { darkMode, setDarkMode, loggedInUser } = useContext(userContext);

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
            Hello{" "}
            {loggedInUser.displayName
              ? loggedInUser.displayName.split(" ")[0]
              : "user"}
          </Text>
          <Text style={styles.des}>Welcome Back</Text>
        </View>
        <View style={styles.topButtonWrap}>
          <TouchableOpacity
            style={styles.dropDownButton}
            onPress={() => {
              setDarkMode(!darkMode);
            }}
          >
            <Feather
              name={darkMode ? "sun" : "moon"}
              size={24}
              color={darkMode ? "orange" : "black"}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.dropDownButton}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color={darkMode ? "white" : "black"}
            />
          </TouchableOpacity> */}
        </View>
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
    width: 30,
    height: 30,
    right: 0,
    marginHorizontal: 20,
  },
  DropDownWrap: {
    position: "absolute",
    flex: 1,
  },
  topButtonWrap: {
    right: 0,
    position: "absolute",
    flexDirection: "row",
  },
});
