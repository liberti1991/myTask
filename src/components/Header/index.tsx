import { Image } from "react-native";
import { HeaderContainer } from "./styles";

import LogoHeader from "../../assets/Logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <Image source={LogoHeader} alt="Logo todo" />
    </HeaderContainer>
  );
}
