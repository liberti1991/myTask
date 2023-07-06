import { Image } from "react-native";
import { HeaderBtn, HeaderContainer } from "./styles";

import { useNavigation } from "@react-navigation/native";
import LogoHeader from "../../assets/Logo.png";
import { IonIcons } from "../Icons/IonIcons";

export function Header({ showBtn = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("myTasks");
  }

  return (
    <HeaderContainer showBtn={showBtn}>
      {showBtn && (
        <HeaderBtn>
          <IonIcons icon="md-arrow-undo-outline" onPress={handleGoBack} />
        </HeaderBtn>
      )}

      <Image source={LogoHeader} alt="Logo todo" />
    </HeaderContainer>
  );
}
