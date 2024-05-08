import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";
import KeypadButton from "./KeypadButton";
import { Ionicons } from "@expo/vector-icons";
import user from "../helper/userHelper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Keypad({ title, navigation }) {
  const [pin, setPin] = useState([]);
  const [showPin, setShowPin] = useState(false);

  useEffect(() => {
    console.log(pin);
    if (pin.length == 4) {
      const mainPin = pin.join("");
      console.log(mainPin);
      if (user.password !== mainPin) {
        Alert.alert("Incorrect Pin", "Please Enter A correct Pin");
        setPin([]);
      } else {
        console.log(navigation);
        navigation.navigate("HomeTabs");
        setPin([]);
      }
    }
  }, [pin]);

  //   useEffect(() => {
  //     console.log(showPin);
  //   }, [showPin]);

  function enterPin(command) {
    if (command == "clear") {
      setPin(pin.slice(0, -1));
    } else {
      setPin([...pin, command.toString()]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pinContainer}>
        <Text style={styles.eachPinCont}>
          {pin[0] && (showPin ? pin[0] : "*")}
        </Text>
        <Text style={styles.eachPinCont}>
          {pin[1] && (showPin ? pin[1] : "*")}
        </Text>
        <Text style={styles.eachPinCont}>
          {pin[2] && (showPin ? pin[2] : "*")}
        </Text>
        <Text style={styles.eachPinCont}>
          {pin[3] && (showPin ? pin[3] : "*")}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setShowPin(!showPin);
          }}
        >
          <Ionicons
            style={styles.eyeIcon}
            name={showPin ? "eye" : "eye-off"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrap}>
        <KeypadButton onAction={enterPin} value={1} size={50} fontSize={25} />
        <KeypadButton onAction={enterPin} value={2} size={50} fontSize={25} />
        <KeypadButton onAction={enterPin} value={3} size={50} fontSize={25} />
      </View>
      <View style={styles.wrap}>
        <KeypadButton onAction={enterPin} value={4} size={50} fontSize={25} />
        <KeypadButton onAction={enterPin} value={5} size={50} fontSize={25} />
        <KeypadButton onAction={enterPin} value={6} size={50} fontSize={25} />
      </View>
      <View style={styles.wrap}>
        <KeypadButton onAction={enterPin} value={7} size={50} fontSize={25} />
        <KeypadButton onAction={enterPin} value={8} size={50} fontSize={25} />
        <KeypadButton onAction={enterPin} value={9} size={50} fontSize={25} />
      </View>
      <View style={styles.wrap}>
        <KeypadButton
          onAction={enterPin}
          type={"clear"}
          value={"clear"}
          size={50}
          fontSize={25}
        />
        <KeypadButton onAction={enterPin} value={0} size={50} fontSize={25} />
        <KeypadButton
          onAction={enterPin}
          type={"submit"}
          value={"submit"}
          size={50}
          fontSize={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    marginVertical: 10,
  },
  container: {
    padding: 20,
    gap: 20,
  },
  wrap: {
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pinContainer: {
    width: 150,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -24,
  },
  eachPinCont: {
    fontSize: 30,
    width: 40,
    height: 50,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "#faf7f7",
    margin: 5,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
});
