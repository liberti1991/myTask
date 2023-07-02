import styled, { css } from "styled-components/native";
import { ICardTaskTitle } from "./interfaces";

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

export const CardTaskTitle = styled.Text<ICardTaskTitle>`
  ${({ theme, checked }) => css`
    color: ${checked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    text-decoration: ${checked && "line-through"};
  `}

  flex: 1;
`;
