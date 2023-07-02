import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export type IButtonIcon = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};
