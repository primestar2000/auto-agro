import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import ToggleButton from "../ToggleButton";

export default function Card({ image, click }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Pepper Farm</Text>
        <ToggleButton click={click} ballSize={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.TEXT_SECONDARY,
    paddingVertical: 10,
  },
});
