import styled, { css } from "styled-components/native";
import { ErrorStyles } from "./interfaces";

export const ErrorContainer = styled.Text<ErrorStyles>`
  ${({ theme, marginProps }) => css`
    color: ${theme.COLORS.DANGER};
    font-size: ${theme.FONT_SIZE.SM}px;
    margin: ${marginProps ? marginProps : 0};
  `}
`;
