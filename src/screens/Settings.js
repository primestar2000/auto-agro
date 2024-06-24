import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Switch,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Settings/Card";
import { COLORS } from "../constants/colors";
import userContext from "../context/userContext";
import { getAuth, signOut } from "firebase/auth";
export default function Settings() {
  const { darkMode, setDarkMode, setNetworkIp } = useContext(userContext);
  const [inputedText, setInputedText] = useState("");
  useEffect(() => {
    console.log(inputedText);
  }, [inputedText]);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
      ]}
    >
      {/* <Toast /> */}
      <Card title={"preference"}>
        <View style={styles.switchContainer}>
          <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
            Dark Mode
          </Text>
          <Switch
            value={darkMode}
            onValueChange={() => {
              setDarkMode(!darkMode);
            }}
          />
        </View>
      </Card>
      <Card title={"NetWork"}>
        <View style={styles.formWrap}>
          <TextInput
            onChangeText={(input) => {
              setInputedText(input);
            }}
            style={[styles.ipInput, { color: darkMode ? "white" : "black" }]}
            placeholder="192.168....."
            placeholderTextColor={"gray"}
          />
          <Button
            style={styles.updateButton}
            color={COLORS.PRIMARY}
            title="Update"
            onPress={() => {
              if (inputedText != "") {
                if (inputedText.length >= 12) {
                  setNetworkIp(inputedText);
                  Alert.alert(
                    "You have successfully updated you Network Ip Address"
                  );
                } else {
                  Alert.alert("Invalid Network Ip Address");
                }
              } else {
                Alert.alert("Ip Address Cant be empty");
              }
            }}
          />
        </View>
      </Card>
      <Card>
        <Button
          title="Logout"
          color={"red"}
          onPress={() => {
            signOut(getAuth())
              .then(() => {
                Alert.alert("user is signed out");
              })
              .catch(() => {
                Alert.alert("something went wrong");
              });
          }}
        />
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    rowGap: 10,
    position: "relative",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  ipInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "gray",
    height: 40,
    paddingHorizontal: 10,
  },
  formWrap: {
    rowGap: 10,
  },
  updateButton: {
    backgroundColor: COLORS.PRIMARY,
  },
});
