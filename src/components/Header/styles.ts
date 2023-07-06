import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 120px;
  align-items: center;
  padding: 50px;
`;

export const HeaderBtn = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 20px;
`;
