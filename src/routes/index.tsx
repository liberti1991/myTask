import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Container } from "../styles/container";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Container>
  );
}
