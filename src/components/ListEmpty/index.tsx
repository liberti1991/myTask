import { useTheme } from "styled-components";
import { ListEmptyContainer, ListEmptyMessage } from "./styles";

import Icon from "@expo/vector-icons/Octicons";
import { IListEmpty } from "./interfaces";

export function ListEmpty({ type }: IListEmpty) {
  const { COLORS } = useTheme();

  return (
    <ListEmptyContainer>
      <Icon name="checklist" color={COLORS.GRAY_400} size={70} />

      <ListEmptyMessage type="Title">
        {type === "maids"
          ? "Você ainda não tem tarefas cadastradas"
          : type === "completed"
          ? "Você nao tem tarefas concluídas"
          : ""}
      </ListEmptyMessage>

      <ListEmptyMessage type="subTitle">
        Crie tarefas e organize seus itens a fazer
      </ListEmptyMessage>
    </ListEmptyContainer>
  );
}
