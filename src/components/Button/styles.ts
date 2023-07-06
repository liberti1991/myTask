import { css } from "styled-components";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_400};
    background-color: ${theme.COLORS.GRAY_500};
  `}

  border-width: 1px;
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
`;

export const ButtonTitle = styled.Text`
  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.MD}px;
    color: ${p.theme.COLORS.GRAY_200};
    font-family: ${p.theme.FONT_FAMILY.BOLD};
    font-size: ${p.theme.FONT_SIZE.LG}px;
  `}
`;
