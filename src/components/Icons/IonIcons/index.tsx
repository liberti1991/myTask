import { TouchableOpacity } from "react-native";
import { IonIconsProps } from "./interfaces";
import { IconStyles } from "./styles";

export function IonIcons({ icon, ...rest }: IonIconsProps) {
  return (
    <TouchableOpacity {...rest}>
      <IconStyles name={icon} />
    </TouchableOpacity>
  );
}
