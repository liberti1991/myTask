import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import {
  handleEditTask,
  handleRemoveTask,
} from "../../screens/myTasks/services";
import { IonIcons } from "../Icons/IonIcons";
import { ICardTask } from "./interfaces";
import { CardTaskContainer, CardTaskTitle } from "./styles";

export function CardTask({ task, checked, updatePage }: ICardTask) {
  const { COLORS } = useTheme();

  const [isChecked, setChecked] = useState<boolean>(checked);

  function handleCheckboxChange(newValue: boolean) {
    setChecked(newValue);
    handleEditTask(task, newValue, updatePage);
  }

  function handleConfirmDelete() {
    Alert.alert("Remover", "Deseja remover a tarefa ?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => handleRemoveTask(task, updatePage) },
    ]);
  }

  return (
    <CardTaskContainer>
      <Checkbox
        style={{ borderRadius: 50 }}
        value={isChecked}
        onValueChange={handleCheckboxChange}
        color={isChecked ? `${COLORS.PURPLE_DARK}` : `${COLORS.BLUE_DARK}`}
      />
      <CardTaskTitle checked={isChecked}>{task}</CardTaskTitle>
      <IonIcons icon="trash" onPress={handleConfirmDelete} />
    </CardTaskContainer>
  );
}
