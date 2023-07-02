import { IButtonIcon } from "./interfaces";
import { ButtonIconContainer, Icon } from "./styles";

export function ButtonIcon({ icon, ...rest }: IButtonIcon) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} />
    </ButtonIconContainer>
  );
}
