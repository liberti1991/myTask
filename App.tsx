import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "./src/components/loading";
import { MyTasks } from "./src/screens/myTasks";
import theme from "./src/theme";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.GRAY_700}
        translucent
      />
      {fontLoaded ? <MyTasks /> : <Loading />}
    </ThemeProvider>
  );
}
