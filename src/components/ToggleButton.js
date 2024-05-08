import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export default function ToggleButton({ click, ballSize }) {
  const [status, setStatus] = useState(false);
  const transform = useSharedValue(0); // Corrected initialization

  const AnimBallStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(status ? ballSize : 0, {
            duration: 1000,
            easing: Easing.bezier(0.5, 0.01, 0, 1),
          }),
        },
      ],
    };
  });

  if (!ballSize) {
    ballSize = 20;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        if (status) {
          click("OFF");
        } else {
          click("ON");
        }
        setStatus(!status);
      }}
      style={[
        styles.container,
        {
          width: ballSize * 2,
          height: ballSize,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.ball,
          {
            width: ballSize,
            height: ballSize,
            borderRadius: ballSize / 2, // Changed to use numeric value
            backgroundColor: status ? COLORS.PRIMARY : "red",
          },
          AnimBallStyle,
        ]}
      ></Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f5f3",
    borderRadius: 20,
  },
});
