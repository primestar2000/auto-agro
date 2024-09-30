import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SystemInformation from "../screens/SystemInformation";
import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import CustomHeader from "../components/CustomHeader";
import { View } from "react-native";
import BottomNavIconWrap from "../components/BottomNavIconWrap";
import AddDevice from "../screens/AddDevice";
import { useContext } from "react";
import userContext from "../context/userContext";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeTabs() {
  const Tab = createBottomTabNavigator();
  const { darkMode, setDarkMode } = useContext(userContext);
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarStyle: { backgroundColor: COLORS.SECONDARY },
        tabBarStyle: {
          height: 70,
          backgroundColor: darkMode ? COLORS.PRIMARY_DARK : "white",
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarActiveTintColor: "grey",
        header: () => {
          return <CustomHeader />;
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          //title: "Home",

          tabBarShowLabel: true,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <BottomNavIconWrap>
                <Ionicons name="home" size={24} color={COLORS.PRIMARY} />
              </BottomNavIconWrap>
            ) : (
              <Ionicons name="home-outline" size={24} color={COLORS.PRIMARY} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <BottomNavIconWrap>
                <Ionicons name="settings" size={24} color={COLORS.PRIMARY} />
              </BottomNavIconWrap>
            ) : (
              <Ionicons
                name="settings-outline"
                size={24}
                color={COLORS.PRIMARY}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="AddDevice"
        component={AddDevice}
        options={{
          title: "Device",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarLabel: "New Device",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <BottomNavIconWrap>
                <Ionicons name="add" size={24} color={COLORS.PRIMARY} />
              </BottomNavIconWrap>
            ) : (
              <Ionicons name="add-outline" size={24} color={COLORS.PRIMARY} />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="SystemInformation"
        component={SystemInformation}
        options={{
          headerShown: false,
          title: "system",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <BottomNavIconWrap>
                <Ionicons name="person" size={24} color={COLORS.PRIMARY} />
              </BottomNavIconWrap>
            ) : (
              <Ionicons
                name="person-outline"
                size={24}
                color={COLORS.PRIMARY}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
