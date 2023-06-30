import { useTheme } from "styled-components";
import { ListEmptyContainer, ListEmptyMessage } from "./styles";

import Icon from "@expo/vector-icons/Octicons";

export function ListEmpty() {
  const { COLORS } = useTheme();

  return (
    <ListEmptyContainer>
      <Icon name="checklist" color={COLORS.GRAY_400} size={70} />

      <ListEmptyMessage type="Title">
        Você ainda não tem tarefas cadastradas
      </ListEmptyMessage>

      <ListEmptyMessage type="subTitle">
        Crie tarefas e organize seus itens a fazer
      </ListEmptyMessage>
    </ListEmptyContainer>
  );
}
