import { useTheme } from "styled-components/native";
import { IInput } from "./interfaces";
import { InputContainer } from "./styles";

export function Input({ inputRef, ...rest }: IInput) {
  const { COLORS } = useTheme();

  return (
    <InputContainer
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
