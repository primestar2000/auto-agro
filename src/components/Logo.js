import { Image } from "react-native";

export default function Logo({ size }) {
  const logo = require("../../assets/icon.png");
  return <Image style={{ width: size, height: size }} source={logo} />;
}
