import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
} from "react-native-reanimated";
import userContext from "../context/userContext";

export default function TopAlert() {
  const { globalAlertMessage, setGloabalAlertMessage } =
    useContext(userContext);
  const { title, type, message } = globalAlertMessage;
  let primaryColor, secondaryColor;
  const top = useSharedValue(-100);

  async function comeDown() {
    if (await globalAlertMessage.message) {
      top.value = withSpring(0);
      setTimeout(goUp, 5000);
    }
  }
  function goUp() {
    top.value = withSpring(-100);
    setGloabalAlertMessage({});
  }

  useEffect(() => {
    console.log(globalAlertMessage);

    comeDown();
  }, [title, message]);

  switch (type) {
    case "error":
      primaryColor = "red";
      secondaryColor = "#fd8181";

      break;
    case "success":
      primaryColor = "green";
      secondaryColor = "#bcecbc";

      break;

    default:
      primaryColor = "#0808f77a";
      secondaryColor = "#abe1f6";

      break;
  }
  if (globalAlertMessage.message) {
    return (
      <>
        <Animated.View style={[styles.container, { top: top }]}>
          <View style={[styles.wrap, { backgroundColor: secondaryColor }]}>
            <View style={styles.topSection}>
              <Text style={[styles.title, { color: primaryColor }]}>
                {title}
              </Text>
              <Pressable
                onPress={() => {
                  goUp();
                }}
              >
                <Ionicons
                  name={"close-circle"}
                  color={primaryColor}
                  size={20}
                />
              </Pressable>
            </View>
            <Text style={styles.message}>{message}</Text>
          </View>
        </Animated.View>
        {/* <Button
            title="click me"
           
          /> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    padding: 10,
    zIndex: 10,
  },
  wrap: {
    backgroundColor: "#fd8181",
    padding: 10,
    borderRadius: 10,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "red",
  },
  message: {
    fontSize: 14,
    color: "white",
  },
});
