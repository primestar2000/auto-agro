import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { BlurView } from "react-native-blur";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import userContext from "../../context/userContext";

export default function IpAddressSection() {
  const { darkMode, setDarkMode, networkIp } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? COLORS.SECONDARY_DARK : "white" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: darkMode ? "white" : COLORS.TEXT_SECONDARY },
        ]}
      >
        Ip Address
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            position: "relative",
            width: 100,
            height: 30,
            marginRight: 5,
          }}
        >
          {/* <ImageBackground
            source={require("../../../assets/splash.png")}
            style={{
              width: "60%",
              right: 0,
              height: "100%",
              position: "absolute",
              zIndex: 1,
              opacity: 0.96,
            }}
            blurRadius={10}
          /> */}
          <Text
            style={[
              styles.ip,
              { color: darkMode ? "white" : COLORS.TEXT_SECONDARY },
            ]}
          >
            {networkIp}
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="eye-off-sharp" size={18} color="black" />
        </TouchableOpacity>
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
    marginVertical: 20,
    paddingHorizontal: 20,
    padding: 10,
    elevation: 3, // For the 0px 1px 0px shadow
    shadowColor: "rgba(17, 17, 26, 0.1)", // Shadow color // Background color
    borderRadius: 20,
  },
  ip: {
    fontWeight: "600",
    fontSize: 13,
    marginTop: 10,
    color: COLORS.TEXT_SECONDARY,
  },
});
