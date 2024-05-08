import { View } from "react-native";
import { COLORS } from "../constants/colors";

export default function BottomNavIconWrap({ children }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.SECONDARY,
        padding: 7,
        paddingHorizontal: 20,
        borderRadius: 20,
      }}
    >
      {children}
      {/* Render the children directly without double curly braces */}
    </View>
  );
}
