import styled, { css } from "styled-components/native";

export const InputContainer = styled.TextInput`
  ${(p) => css`
    background-color: ${p.theme.COLORS.GRAY_500};
    color: ${p.theme.COLORS.GRAY_200};
    font-family: ${p.theme.FONT_FAMILY.REGULAR};
    font-size: ${p.theme.FONT_SIZE.MD}px;
  `}

  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 5px;
  padding: 16px;
`;
