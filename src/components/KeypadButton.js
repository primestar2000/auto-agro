import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

import { Ionicons } from "@expo/vector-icons";
export default function KeypadButton({
  value,
  size,
  fontSize,
  type,
  onAction,
}) {
  function triggerPressed(trigger) {
    console.log("child");
  }
  if (type === "clear") {
    return (
      <TouchableOpacity
        onPress={() => {
          onAction(value);
        }}
        style={[styles.button, { width: size, height: size }]}
      >
        <Ionicons name="arrow-back" size={24} color={COLORS.TEXT_SECONDARY} />
      </TouchableOpacity>
    );
  } else if (type === "submit") {
    return (
      <TouchableOpacity
        onPress={() => {
          onAction(value);
        }}
        style={[styles.button, { width: size, height: size }]}
      >
        <Ionicons
          name="arrow-forward-outline"
          size={24}
          color={COLORS.PRIMARY}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          onAction(value);
        }}
        style={[styles.button, { width: size, height: size }]}
      >
        <Text style={[styles.title, { fontSize: fontSize }]}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.TEXT_SECONDARY,
  },
  button: {
    backgroundColor: "#faf7f7",

    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
