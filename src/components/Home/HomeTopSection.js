import { StyleSheet, Text, View } from "react-native";
import HomeTopSectionItem from "./HomeTopSectionItem";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import userContext from "../../context/userContext";

export default function HomeTopSection() {
  const [randomNumber, setRandomNumber] = useState(0);
  const { darkMode, setDarkMode, networkStatus, setNetworkStatus, networkIp } =
    useContext(userContext);

  useEffect(() => {
    console.log("network status", networkStatus);
  }, [networkStatus]);
  useEffect(() => {
    const pingNetwork = async () => {
      try {
        const response = await axios.get(`http://${networkIp}/${"WifiStatus"}`);
        if (response.status === 200) {
          if (!networkStatus) {
            setNetworkStatus(true);
          }
        } else {
          setNetworkStatus(false);
        }
      } catch (error) {
        console.log(error);
        setNetworkStatus(false);
      }
    };

    const intervalId = setInterval(pingNetwork, 5000);

    return () => {
      clearInterval(intervalId); // Clear the interval
      const source = axios.CancelToken.source();
      source.cancel("Request cancelled by cleanup");
    };
  }, []);

  function getRandomNumber(min, max) {
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  // setInterval(() => {
  //   getRandomNumber(40, 95);
  // }, 6000);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? COLORS.SECONDARY_DARK : "white" },
      ]}
    >
      <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>
        Quick Status
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <HomeTopSectionItem title={"water level"} value={"80%"} />
        <HomeTopSectionItem
          title={"Network status "}
          value={
            networkStatus ? (
              <Ionicons name="wifi-sharp" size={24} color="green" />
            ) : (
              <MaterialCommunityIcons name="wifi-off" size={24} color="red" />
            )
          }
        />
        <HomeTopSectionItem
          title={"Network Strength"}
          value={randomNumber + "%"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "900",
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
  },
  container: {
    padding: 20,
    elevation: 3, // For the 0px 1px 0px shadow
    shadowColor: "rgba(17, 17, 26, 0.1)", // Shadow color
    backgroundColor: "white", // Background color
    borderRadius: 20,
  },
});
