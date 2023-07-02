import { ButtonProps } from "./interface";
import { ButtonContainer, ButtonTitle } from "./styles";

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
