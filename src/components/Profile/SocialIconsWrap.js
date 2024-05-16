import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SocialIconsWrap({ iconName, color }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name={iconName} size={25} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 70,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
