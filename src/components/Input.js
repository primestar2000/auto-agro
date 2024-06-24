import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function InputWrap({
  placeholder,
  children,
  iconName,
  iconColor,
}) {
  return (
    <View style={styles.container}>
      {children}
      <Ionicons
        name={iconName}
        color={iconColor}
        style={{ width: 30, fontSize: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#e5dddd6e",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
