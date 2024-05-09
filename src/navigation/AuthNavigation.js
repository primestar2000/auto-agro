import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Overlay from "../components/Overlay"; // Import the Overlay component
import HomeTabs from "./navigation";
import DeviceDetail from "../screens/DeviceDetail";
import { collection, getDocs } from "firebase/firestore";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { db } from "../../firebase/firebaseConfig";
import devicesEndpoints from "../context/deviceContext";
const Stack = createNativeStackNavigator();

export default function AuthenticatedNavigation() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setOverlayVisible(true);
    getDevices();
  }, []);

  useEffect(() => {
    // console.log(devices);
  }, [devices]);

  async function getDevices() {
    try {
      const items = [];
      const devicesFromServer = await getDocs(collection(db, "devices"));
      devicesFromServer.forEach((element) => {
        // console.log(element.data());
        items.push(element.data());
      });
      setDevices(items); // Update devices state
    } catch (error) {
      console.log(error);
    } finally {
      setOverlayVisible(false);
    }
  }

  return (
    <>
      {/* Place the Overlay component here */}
      <Overlay
        isVisible={overlayVisible}
        onClose={() => setOverlayVisible(false)}
      />

      {/* Stack Navigator for authenticated screens */}
      <devicesEndpoints.Provider value={devices}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeTabs"
            component={HomeTabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="DeviceDetail"
            component={DeviceDetail}
          />
        </Stack.Navigator>
      </devicesEndpoints.Provider>
    </>
  );
}
