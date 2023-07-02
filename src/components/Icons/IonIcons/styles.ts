import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const IconStyles = styled(Ionicons).attrs(({ theme }) => ({
  size: 20,
  color: `${theme.COLORS.GRAY_300}`,
}))``;
