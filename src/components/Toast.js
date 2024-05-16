import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
export default function Toast() {
  return (
    <Modal transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <View style={styles.iconWrap}>
            <AntDesign name="checkcircleo" size={20} color={COLORS.PRIMARY} />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.title}>Success</Text>
            <Text style={styles.message}>
              Message is just a random one so do take it serious
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
  },
  container: {
    top: 20,
    zIndex: 50,
    width: "100%",
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  iconWrap: {
    paddingHorizontal: 5,
    backgroundColor: COLORS.SECONDARY,
    justifyContent: "center",
  },
  textWrap: {
    padding: 5,
    flex: 1,
  },
  title: {
    fontWeight: "700",
    color: COLORS.TEXT_SECONDARY,
  },
  message: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
  },
});
