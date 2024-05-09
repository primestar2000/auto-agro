import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Modal,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref } from "firebase/storage";
import SelectComponent from "../components/SelectComponent";
import SelectItem from "../components/SelectItem";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);

function IconWrap({ children, title }) {
  return (
    <View style={styles.iconWrap}>
      {children}
      <Text style={styles.iconTitle}>{title}</Text>
    </View>
  );
}
export default function DeviceDetail({ route }) {
  const [photoDialogVisible, setPhotoDialogVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const { devicesEndpoint } = route.params;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={() => {
          setPhotoDialogVisible(true);
        }}
      >
        <Image
          style={styles.ItemImage}
          source={
            photo ? { uri: photo } : require("../../assets/images/image1.jpeg")
          }
        />
      </Pressable>
      <View style={styles.buttomSection}>
        <SelectComponent title={"Select Endpoint"} modalCustomStyles={{}}>
          {console.log("here is the parameter:", route.params)}
          <SelectItem>hey</SelectItem>
          <SelectItem>hey</SelectItem>
          <SelectItem>hey</SelectItem>
        </SelectComponent>
      </View>

      <StatusBar style="auto" />
      {photoDialogVisible && (
        <Modal>
          <Pressable
            onPress={() => {
              setPhotoDialogVisible(false);
            }}
            style={styles.overlayContainer}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.titleModal}>Device Photo</Text>
              <View style={styles.contentModal}>
                <Pressable
                  onPress={() => {
                    pickImage();
                  }}
                >
                  <IconWrap title={"Camera"}>
                    <Ionicons
                      name="camera-outline"
                      size={23}
                      color={"orange"}
                    />
                  </IconWrap>
                </Pressable>
                <Pressable
                  onPress={() => {
                    console.log("worked");
                  }}
                >
                  <IconWrap title={"Gallery"}>
                    <Ionicons name="image-outline" size={23} color={"orange"} />
                  </IconWrap>
                </Pressable>
                <Pressable
                  onPress={() => {
                    console.log("worked");
                  }}
                >
                  <IconWrap title={"Delete"}>
                    <Ionicons
                      name="trash"
                      size={23}
                      color={COLORS.TEXT_SECONDARY}
                    />
                  </IconWrap>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
  },
  contentContainer: {
    width: "100%",
    maxWidth: 290,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    position: "absolute",
  },
  titleModal: {
    fontSize: 20,
    fontWeight: "900",
    color: COLORS.TEXT_SECONDARY,
    textAlign: "center",
  },
  contentModal: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconWrap: {
    backgroundColor: "#f5f3f2",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 55,
    borderRadius: 10,
    marginTop: 30,
  },
  iconTitle: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
  },
  imageContainer: {
    width: "100%",
    padding: 20,
  },
  ItemImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  buttomSection: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  selectContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
  },
});
