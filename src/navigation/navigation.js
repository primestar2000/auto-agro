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

export default function HomeTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarStyle: { backgroundColor: COLORS.SECONDARY },
        tabBarStyle: { height: 70 },
        tabBarLabelStyle: { fontSize: 16 },
        tabBarActiveTintColor: COLORS.TEXT_PRIMARY,
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
      <Tab.Screen
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
      />
      <Tab.Screen
        name="SystemInformation"
        component={SystemInformation}
        options={{
          title: "system",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarLabel: "About",
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <BottomNavIconWrap>
                <Ionicons
                  name="information-circle"
                  size={24}
                  color={COLORS.PRIMARY}
                />
              </BottomNavIconWrap>
            ) : (
              <Ionicons
                name="information-circle-outline"
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
