import styled, { css } from "styled-components/native";
import { InputProps } from "./interfaces";

export const InputContainer = styled.View`
  min-height: 50px;
  margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const InputComponent = styled.TextInput<InputProps>`
  ${({ theme, multiline }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    min-height: ${multiline === true ? "100px" : "44px"};
  `}

  flex: 1;
  border-radius: 5px;
  padding: 14px 16px 10px;
`;
