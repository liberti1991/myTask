import styled, { css } from "styled-components/native";
import { IColorsTitle } from "./interfaces";

export const MyTasksStatus = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 20px;
`;

export const MyTasksStatusCircle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    background-color: ${theme.COLORS.GRAY_400};
  `}

  padding: 2px 7px;
  border-radius: 50px;
`;

export const MyTasksStatusTitle = styled.Text<IColorsTitle>`
  ${({ theme, type }) => css`
    color: ${type === "maids"
      ? theme.COLORS.BLUE
      : type === "pending"
      ? theme.COLORS.DANGER
      : theme.COLORS.PURPLE};
  `}

  margin-right:10px;
`;
