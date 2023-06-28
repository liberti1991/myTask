import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export function ButtonIcon({ icon, ...rest }: IButtonIcon) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} />
    </ButtonIconContainer>
  );
}

type IButtonIcon = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const ButtonIconContainer = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 5px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: "white",
}))``;
