import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export type IonIconsProps = TouchableOpacityProps & {
  icon: keyof typeof Ionicons.glyphMap;
};
