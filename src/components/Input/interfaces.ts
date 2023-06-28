import { TextInput, TextInputProps } from "react-native";

export type IInput = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};
