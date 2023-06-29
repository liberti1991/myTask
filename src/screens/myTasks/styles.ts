import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { IColorsTitle } from ".";

export const MyTasksContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const MyTasksForm = styled.View`
  position: absolute;
  top: 150px;
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const MyTasksContainerTasks = styled.View`
  padding: 20px;
  flex: 1;
`;

export const MyTasksStatus = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 35px 10px 20px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};
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
    color: ${type === "maids" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  `}

  margin-right:10px;
`;
