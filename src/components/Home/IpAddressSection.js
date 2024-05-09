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
  const { darKMode, setDarkMode } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darKMode ? COLORS.PRIMARY_DARK : "white" },
      ]}
    >
      <Text style={styles.title}>Ip Address</Text>
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
          <Text style={styles.ip}>192.169.43.56</Text>
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
    padding: 20,
    elevation: 1, // For the 0px 1px 0px shadow
    shadowColor: "rgba(17, 17, 26, 0.1)", // Shadow color // Background color
    borderRadius: 20,
  },
  ip: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    color: COLORS.TEXT_SECONDARY,
  },
});
