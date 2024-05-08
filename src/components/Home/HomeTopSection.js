import { StyleSheet, Text, View } from "react-native";
import HomeTopSectionItem from "./HomeTopSectionItem";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import axios from "axios";

export default function HomeTopSection() {
  const [networkStatus, setNetworkStatus] = useState(false);

  useEffect(() => {
    const pingNetwork = async () => {
      try {
        const response = await axios.get(
          `http://192.168.43.54/${"WifiStatus"}`
        );
        if (response.status === 200) {
          if (!networkStatus) {
            setNetworkStatus(true);
          }
          console.log(networkStatus);
        } else {
          setNetworkStatus(false);
        }
      } catch (error) {
        console.log(error);
        setNetworkStatus(false);
        console.log(networkStatus);
      }
    };

    // const intervalId = setInterval(pingNetwork, 5000);

    // return () => {
    //   clearInterval(intervalId); // Clear the interval
    //   const source = axios.CancelToken.source();
    //   source.cancel("Request cancelled by cleanup");
    // };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Status</Text>
      <TouchableOpacity>
        <Text>Test</Text>
      </TouchableOpacity>
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
        <HomeTopSectionItem title={"Network Strength"} value="20%" />
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
    elevation: 1, // For the 0px 1px 0px shadow
    shadowColor: "rgba(17, 17, 26, 0.1)", // Shadow color
    backgroundColor: "white", // Background color
    borderRadius: 20,
  },
});
