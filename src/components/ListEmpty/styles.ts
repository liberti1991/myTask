import styled, { css } from "styled-components/native";

export const ListEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ListEmptyMessage = styled.Text`
  text-align: center;

  ${(p) => css`
    font-size: ${p.theme.FONT_SIZE.SM}px;
    font-family: ${p.theme.FONT_FAMILY.REGULAR};
    color: ${p.theme.COLORS.GRAY_300};
  `}
`;
