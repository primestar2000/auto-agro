import { Image } from "react-native";

export default function Logo() {
  const logo = require("../../assets/icon.png");
  return <Image source={logo} />;
}
