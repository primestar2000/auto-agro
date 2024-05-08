import { StyleSheet, Text, View, StatusBar } from "react-native";
export default function SystemInformation() {
  return (
    <View style={styles.container}>
      <Text>System information</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
