import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { IButtonIcon } from "./interfaces";

export const ButtonIconContainer = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 5px;
`;

export const Icon = styled(MaterialIcons).attrs<IButtonIcon>(({ theme }) => ({
  size: 24,
  color: `${theme.COLORS.GRAY_100}`,
}))``;
