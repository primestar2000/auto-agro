import { Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { useContext } from "react";
import userContext from "../../context/userContext";

export default function HomeTopSectionItem({ title, value }) {
  const { darkMode, setDarkMode } = useContext(userContext);
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          padding: 5,
          color: darkMode ? "white" : "black",
          fontSize: 12,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "#f2f5f3",
          width: 60,
          height: 25,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: COLORS.SECONDARY,
        }}
      >
        <Text style={{ fontWeight: "bold", color: COLORS.TEXT_SECONDARY }}>
          {value}
        </Text>
      </View>
    </View>
  );
}
