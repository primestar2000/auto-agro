import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useEffect } from "react";
export default function AddDevice() {
  return (
    <View style={styles.container}>
      <Text>AddDevice</Text>
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
