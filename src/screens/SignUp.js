import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Logo from "../components/Logo";
import { COLORS } from "../constants/colors";
import Input from "../components/Input";
import InputWrap from "../components/Input";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState, useContext } from "react";
import OverLayout from "./Overlayout";
import { FIREBASE_AUTH } from "../../firebase/firebaseConfig";
import { verifySignUpCredentials } from "../helper/helperFunction";
import Loader from "../components/Loader";
import userContext from "../context/userContext";
import TopAlert from "../components/TopAlert";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { globalAlertMessage, setGloabalAlertMessage } =
    useContext(userContext);
  const provider = new GoogleAuthProvider();

  const [loaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  useEffect(() => {
    console.log(email, displayName, phoneNumber, password, confirmPassword);
  }, [email, displayName, phoneNumber, password, confirmPassword]);

  async function login() {
    let verified = verifySignUpCredentials(email, password, confirmPassword);
    if (verified !== true) {
      setGloabalAlertMessage({
        message: verified.error,
        type: "error",
        title: "message",
      });
    } else {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(getAuth(), email, password)
          .then((userCredential) => {
            return updateProfile(getAuth().currentUser, {
              displayName: displayName,
              phoneNumber: phoneNumber,
            });
          })
          .then(() => {
            console.log("profile updated");
            Alert.alert("User Profile updated");
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      {loading && <Loader />}
      <ScrollView style={{ flex: 1, position: "relative" }}>
        <View style={styles.container}>
          <TopAlert />
          <View style={styles.topSection}>
            <Logo size={100} />
            <Text style={styles.CompanyName}>AutoAgro</Text>
            <Text style={styles.title}>Create An Account</Text>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.midSection}>
              <InputWrap iconName={"person"} iconColor={"green"}>
                <TextInput
                  placeholder={"Username"}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setDisplayName(text);
                  }}
                />
              </InputWrap>
              <InputWrap iconName={"mail-sharp"} iconColor={"green"}>
                <TextInput
                  placeholder={"Email"}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </InputWrap>
              <InputWrap iconName={"call"} iconColor={"green"}>
                <TextInput
                  placeholder={"phone"}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setPhoneNumber(text);
                  }}
                />
              </InputWrap>
              <InputWrap iconName={"lock-closed"} iconColor={"green"}>
                <TextInput
                  secureTextEntry={true}
                  placeholder={"Password"}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
              </InputWrap>
              <InputWrap iconName={"key"} iconColor={"green"}>
                <TextInput
                  placeholder={"Confirm Password"}
                  secureTextEntry={true}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                  }}
                />
              </InputWrap>
              {error && (
                <Text style={{ color: "red", textAlign: "center" }}>
                  {error}
                </Text>
              )}

              <TouchableOpacity style={styles.submitButton} onPress={login}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 15, textAlign: "center" }}>Or</Text>
              {/* <TouchableOpacity style={styles.googleButton}>
                <Ionicons
                  name="logo-google"
                  color={"white"}
                  style={{ alignSelf: "flex-start", width: 30, fontSize: 20 }}
                />
                <Text style={styles.googleText}>Use Google</Text>
              </TouchableOpacity> */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ flex: 1, textAlign: "center" }}>
                  I Already Have an Account?
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("SignIn");
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        textAlign: "left",
                        marginLeft: 5,
                        color: COLORS.PRIMARY,
                      }}
                    >
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    padding: 10,
    paddingTop: 40,
    alignItems: "center",
  },
  CompanyName: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: COLORS.PRIMARY,
    fontFamily: "Poppins",
  },
  midSection: {
    flex: 1,
    padding: 20,
    rowGap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.TEXT_PRIMARY,
    marginVertical: 20,
    fontFamily: "Poppins",
  },
  InputField: {
    fontSize: 16,
    flex: 1,
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  googleButton: {
    backgroundColor: "maroon",
    paddingHorizontal: 15,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 14,
    borderRadius: 10,
  },
  googleText: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "white",
    fontWeight: "900",
    fontFamily: "Poppins",
    transform: [
      {
        translateX: -20,
      },
    ],
  },
});
