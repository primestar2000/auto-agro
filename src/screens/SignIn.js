import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../components/Logo";
import { COLORS } from "../constants/colors";
import Input from "../components/Input";
import InputWrap from "../components/Input";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import OverLayout from "./Overlayout";
import TopAlert from "../components/TopAlert";
import { verifyLoginCredentials } from "../helper/helperFunction";
import userContext from "../context/userContext";
import { auth } from "../../firebase/firebaseConfig";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { globalAlertMessage, setGloabalAlertMessage } =
    useContext(userContext);
  const [loaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  if (!loaded) {
    return null;
  }

  async function login() {
    let verified = verifyLoginCredentials(email, password);
    if (verified !== true) {
      setGloabalAlertMessage({
        message: verified.error,
        type: "error",
        title: "message",
      });
    } else {
      try {
        setLoading(true);
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        // setError(error.code);
        setGloabalAlertMessage({
          message: error.message,
          type: "error",
          title: "message",
        });
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <>
      {loading && (
        <OverLayout>
          <Text style={{ color: "white" }}>Loading .....</Text>
        </OverLayout>
      )}
      <View style={styles.container}>
        <TopAlert />
        <View style={styles.topSection}>
          <Logo size={100} />
          <Text style={styles.CompanyName}>AutoAgro</Text>
          <Text style={styles.title}>Sign In</Text>
        </View>
        <View style={styles.midSection}>
          <KeyboardAvoidingView behavior="padding" style={{ rowGap: 10 }}>
            <InputWrap iconName={"person"} iconColor={"green"}>
              <TextInput
                placeholder={"Email"}
                style={styles.InputField}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </InputWrap>
            <InputWrap iconName={"key"} iconColor={"green"}>
              <TextInput
                placeholder={"Password"}
                style={styles.InputField}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
            </InputWrap>
            <TouchableOpacity style={styles.submitButton} onPress={login}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Or</Text>
            <TouchableOpacity style={styles.googleButton}>
              <Ionicons
                name="logo-google"
                color={"white"}
                style={{ alignSelf: "flex-start", width: 30, fontSize: 20 }}
              />
              <Text style={styles.googleText}>Use Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={{ textAlign: "center", color: "blue" }}>
                Create An Account
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  topSection: {
    padding: 20,
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
    fontSize: 20,
    flex: 1,
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY,
  },
  submitText: {
    color: "white",
    fontSize: 20,
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
