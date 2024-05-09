import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default Overlay = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      {/* Content of your overlay */}
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.closeButton}>Close Overlay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
