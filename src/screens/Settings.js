import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Switch,
  TextInput,
  Button,
} from "react-native";
import { useContext, useEffect } from "react";
import Card from "../components/Settings/Card";
import { COLORS } from "../constants/colors";
import userContext from "../context/userContext";
export default function Settings() {
  const { darkMode, setDarkMode } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
      ]}
    >
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
            style={[styles.ipInput, { color: darkMode ? "white" : "black" }]}
            placeholder="192.168....."
            placeholderTextColor={"gray"}
          />
          <Button
            style={styles.updateButton}
            color={COLORS.PRIMARY}
            title="Update"
          />
        </View>
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
