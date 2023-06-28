import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

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
