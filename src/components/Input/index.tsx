import { useTheme } from "styled-components/native";
import { InputProps } from "./interfaces";
import { InputComponent, InputContainer, InputLabel } from "./styles";

export function Input({ title, ...rest }: InputProps) {
  const { COLORS } = useTheme();

  return (
    <InputContainer>
      <InputLabel>{title}</InputLabel>
      <InputComponent placeholderTextColor={COLORS.GRAY_300} {...rest} />
    </InputContainer>
  );
}
