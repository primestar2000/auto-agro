import { View, TextInput } from "react-native";

export default function Input({ placeholder }) {
  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
}
