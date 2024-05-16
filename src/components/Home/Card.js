import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import ToggleButton from "../ToggleButton";
import { useContext } from "react";
import userContext from "../../context/userContext";

export default function Card({ image, click, title }) {
  const { darkMode, networkStatus } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? COLORS.SECONDARY_DARK : "white",
        },
      ]}
    >
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            { color: darkMode ? "white" : COLORS.TEXT_SECONDARY },
          ]}
        >
          {title}
        </Text>
        <ToggleButton disabled={!networkStatus} click={click} ballSize={20} />
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

    elevation: 4,
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
