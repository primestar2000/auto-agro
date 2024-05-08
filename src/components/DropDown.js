import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS } from "../constants/colors";

export default function DropDown() {
  return (
    <Pressable
      //   onPress={() => {
      //     setMenuStatus(false);
      //   }}
      style={styles.menu}
    >
      <View style={styles.menuContent}>
        <TouchableOpacity>
          <Text style={styles.menuItems}>Rooms</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItems}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItems}>About</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    width: "100%",
    flex: 1,
    top: 0,
    bottom: 0,
    zIndex: 20,
    padding: 10,
    backgroundColor: "#ff00003b",
  },
  menuContent: {
    padding: 10,
    paddingHorizontal: 20,
    width: 200,
    right: 0,
    borderRadius: 20,
    top: 60,
    position: "absolute",
    marginRight: 0,
    backgroundColor: "#ffffff",
    // backgroundColor: "#1f2937", // for dark theme
    elevation: 2, // For the 0px 1px 0px shadow
    shadowColor: "rgba(17, 17, 26, 0.1)", // Shadow color
    backgroundColor: "white", // Background color
  },
  menuItems: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: "300",
    marginTop: 20,
  },
});
