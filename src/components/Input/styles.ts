import styled, { css } from "styled-components/native";
import { InputProps } from "./interfaces";

export const InputContainer = styled.View`
  min-height: 40px;
  margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  position: absolute;
  z-index: 1;
  top: -13px;
  left: 10px;
`;

export const InputComponent = styled.TextInput<InputProps>`
  ${({ theme, multiline }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    min-height: ${multiline === true ? "100px" : "46px"};
  `}

  flex: 1;
  border-radius: 5px;
  padding: 14px 16px 10px;
`;
