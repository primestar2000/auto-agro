import { Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

export default function HomeTopSectionItem({ title, value }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{ fontWeight: "bold", padding: 5, color: COLORS.TEXT_SECONDARY }}
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
        }}
      >
        <Text style={{ fontWeight: "bold", color: COLORS.TEXT_SECONDARY }}>
          {value}
        </Text>
      </View>
    </View>
  );
}
