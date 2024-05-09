import { StyleSheet, View } from "react-native";

export default function OverLayout({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    zIndex: 20,
    backgroundColor: "#020202c7",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
