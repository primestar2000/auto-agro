import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Linking,
} from "react-native";
import { COLORS } from "../constants/colors";
import SocialIconsWrap from "../components/Profile/SocialIconsWrap";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Feather } from "@expo/vector-icons";
export default function SystemInformation({ navigation }) {
  const { darkMode, setDarkMode, loggedInUser } = useContext(userContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white" },
      ]}
    >
      {/* <TouchableOpacity style={styles.backButton}>
        <Ionicons
          size={30}
          name="chevron-back"
          color={darkMode ? "white" : COLORS.TEXT_SECONDARY}
        />
      </TouchableOpacity> */}
      <View style={styles.topButtonsWrap}>
        <TouchableOpacity
          style={styles.darkModeButton}
          onPress={() => {
            setDarkMode(!darkMode);
          }}
        >
          <Feather
            name={darkMode ? "sun" : "moon"}
            size={24}
            color={darkMode ? "orange" : "black"}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        // source={require("../../assets/images/image1.jpeg")}
        // blurRadius={10}
        style={styles.topContainer}
      >
        <View style={styles.imageWrap}>
          <Image
            style={styles.userImage}
            source={
              loggedInUser.email == "amosidajili30@gmail.com"
                ? require("../../assets/images/user.jpg")
                : require("../../assets/images/altUser.png")
            }
          />
        </View>
        <Text
          style={[
            styles.userName,
            { color: darkMode ? "white" : COLORS.SECONDARY_DARK },
          ]}
        >
          {loggedInUser.displayName ? loggedInUser.displayName : "username"}
        </Text>
        <Text
          style={[
            styles.des,
            { color: darkMode ? "white" : COLORS.SECONDARY_DARK },
          ]}
        >
          Computer Scientist
        </Text>
        <Text
          style={[
            styles.des,
            { color: darkMode ? "white" : COLORS.SECONDARY_DARK },
          ]}
        >
          Kogi State, Nigeria
        </Text>
      </ImageBackground>
      <View style={styles.iconWrap}>
        <SocialIconsWrap
          iconName={"logo-facebook"}
          color={"blue"}
          onPress={async () => {
            try {
              await Linking.openURL(`fb://profile/${"amos.benjamin.946"}`); // Try to open in the Facebook app
            } catch (error) {
              Alert.alert(
                "Failed to open Facebook profile. Opening in browser instead."
              );
              await Linking.openURL(
                `https://www.facebook.com/${"amos.benjamin.946"}`
              ); // Open in the browser if the Facebook app is not available
            }
          }}
        />
        <SocialIconsWrap
          iconName={"logo-whatsapp"}
          color={"green"}
          onPress={async () => {
            try {
              // Use wa.me URL scheme to open a WhatsApp chat
              await Linking.openURL("https://wa.me/2347054650009");
            } catch (error) {
              Alert.alert("Failed to open WhatsApp chat.", error);
            }
          }}
        />
        <SocialIconsWrap
          iconName={"logo-instagram"}
          color={"red"}
          onPress={() => {}}
        />
      </View>
      <View style={styles.aboutContainer}>
        <Text
          style={[
            styles.aboutMeTitle,
            { color: darkMode ? "white" : COLORS.SECONDARY_DARK },
          ]}
        >
          About Me
        </Text>
        <Text
          style={[
            styles.aboutMeParagraph,
            { color: darkMode ? "white" : COLORS.SECONDARY_DARK },
          ]}
        >
          Certainly! I'm a dedicated developer known for my commitment to
          excellence and innovative problem-solving. With a blend of creativity
          and technical prowess, I craft high-quality digital solutions that
          push the boundaries of what's possible. Whether tackling complex
          algorithms or refining user interfaces, I bring energy and expertise
          to every project, making me a valuable asset to any team.
        </Text>
      </View>
      <StatusBar
        backgroundColor={darkMode ? COLORS.PRIMARY_DARK : "white"}
        barStyle={darkMode ? "light-content" : "dark-content"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
    position: "relative",
  },
  topContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrap: {
    width: 130,
    height: 130,
  },
  userImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 200,
  },
  userName: {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 20,
    margin: 10,
    color: COLORS.TEXT_SECONDARY,
    letterSpacing: 1.2,
  },
  des: {
    textAlign: "center",
    fontWeight: "700",
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
  },
  iconWrap: {
    width: "100",
    height: 50,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  aboutContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 1,
    alignItems: "center",
  },
  aboutMeTitle: {
    fontSize: 18,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: "700",
  },
  aboutMeParagraph: {
    width: "100%",
    textAlign: "justify",
    letterSpacing: 0.5,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 18,
    fontSize: 13,
  },
  backButton: {
    position: "absolute",
    padding: 20,
  },
  topButtonsWrap: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
  },
  darkModeButton: {
    padding: 20,
    alignSelf: "flex-end",
  },
});
