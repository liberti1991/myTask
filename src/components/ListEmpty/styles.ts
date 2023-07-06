import styled, { css } from "styled-components/native";
import { ITypeTitle } from "./interfaces";

export const ListEmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 40px;
`;

export const ListEmptyMessage = styled.Text<ITypeTitle>`
  ${({ theme, type }) => css`
    font-size: ${type === "Title" ? theme.FONT_SIZE.MD : theme.FONT_SIZE.SM}px;
    font-family: ${type === "Title"
      ? theme.FONT_FAMILY.BOLD
      : theme.FONT_FAMILY.REGULAR};
    color: ${type === "Title" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_300};

    margin-top: ${type === "Title" ? "20px" : 0};
  `}
`;
