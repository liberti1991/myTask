import styled, { css } from "styled-components/native";

export const CardTaskContainer = styled.View`
  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_400};
    background-color: ${theme.COLORS.GRAY_500};
  `}

  margin: 0 20px 7px;
  padding: 0 20px;
  flex-direction: row;
  gap: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 1px;
`;

export const CardTaskTitle = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
