import { Text } from "react-native";
import { CardTaskContainer, CardTaskTitle } from "./styles";

export function CardTask({ task, checked }: ICardTask) {
  console.log(checked);

  return (
    <CardTaskContainer>
      <Text>oi</Text>
      <CardTaskTitle>{task}</CardTaskTitle>
      <Text>oi</Text>
    </CardTaskContainer>
  );
}

export type ICardTask = {
  task: string;
  checked: boolean;
};
