import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.main}>
          <ActivityIndicator size={30} />
          <Text style={styles.title}>Please Wait ...</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000a1",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: 150,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
  },
});
