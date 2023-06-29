import { IListEmpty } from "./interfaces";
import { ListEmptyContainer, ListEmptyMessage } from "./styles";

export function ListEmpty({ message }: IListEmpty) {
  return (
    <ListEmptyContainer>
      <ListEmptyMessage>{message}</ListEmptyMessage>
    </ListEmptyContainer>
  );
}
