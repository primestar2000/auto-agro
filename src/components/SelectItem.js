import { Text, TouchableOpacity, View } from "react-native";

export default function SelectItem({ children }) {
  return (
    <TouchableOpacity>
      <Text style={{ paddingVertical: 10 }}>{children}</Text>
    </TouchableOpacity>
  );
}
