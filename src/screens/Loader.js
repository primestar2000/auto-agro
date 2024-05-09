import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Loading......</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(5, 5, 5, 0.8)",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
});
