import { Pressable, View, Text, StyleSheet, Modal } from "react-native";
import { COLORS } from "../constants/colors";
import { useState } from "react";

export default function SelectComponent({
  title,
  selectValue,
  modalCustomStyles,
  children,
}) {
  function SelectModal({ children }) {
    const [modalVisible, setModalVisible] = useState(true);
    function openModal() {
      setModalVisible(() => {
        setModalVisible(true);
      });
    }
    return (
      modalVisible && (
        <Modal transparent={true}>
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}
            style={[styles.selectModalContainer, modalCustomStyles]}
          >
            {children}
          </Pressable>
        </Modal>
      )
    );
  }
  const [value, setValue] = useState(null);
  return (
    <>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.container}
      >
        <Text>{title}</Text>
      </Pressable>
      <SelectModal>
        <View style={styles.selectContent}>{children}</View>
      </SelectModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: COLORS.TEXT_SECONDARY,
    borderWidth: 2,
    borderRadius: 10,
  },
  selectModalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  selectContent: {
    maxWidth: 250,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
  },
});
