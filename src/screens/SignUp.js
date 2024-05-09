import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
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
} from "firebase/auth";
import { useEffect, useState } from "react";
import OverLayout from "./Overlayout";
import { FIREBASE_AUTH } from "../../firebase/firebaseConfig";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  const provider = new GoogleAuthProvider();

  const [loaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  function validatedForm() {
    if (password === confirmPassword) {
      return true;
    }
  }

  async function login() {
    if (!validatedForm()) {
      setError("Confirm Password Doesnt Match Password");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(error.code);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <OverLayout>
          <Text style={{ color: "white" }}>Loading .....</Text>
        </OverLayout>
      )}
      <ScrollView style={{ flex: 1, position: "relative" }}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Logo />
            <Text style={styles.CompanyName}>AutoAgro</Text>
            <Text style={styles.title}>Create An Account</Text>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <View style={styles.midSection}>
              <InputWrap>
                <TextInput
                  placeholder={"Email"}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </InputWrap>
              <InputWrap>
                <TextInput
                  placeholder={"Password"}
                  style={styles.InputField}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
              </InputWrap>
              <InputWrap>
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
              <TouchableOpacity style={styles.googleButton}>
                <Ionicons
                  name="logo-google"
                  color={"white"}
                  style={{ alignSelf: "flex-start", width: 30, fontSize: 20 }}
                />
                <Text style={styles.googleText}>Use Google</Text>
              </TouchableOpacity>
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
