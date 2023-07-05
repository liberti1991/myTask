import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Alert, View } from "react-native";
import { useTheme } from "styled-components";
import {
  handleEditCheckedTask,
  handleRemoveTask,
} from "../../screens/myTasks/services";
import { IonIcons } from "../Icons/IonIcons";
import { ICardTask } from "./interfaces";
import { CardTaskContainer, CardTaskTitle } from "./styles";

export function CardTask({ task, updatePage }: ICardTask) {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState<boolean>(task.checked);

  function handleCheckboxChange(newValue: boolean) {
    setChecked(newValue);
    handleEditCheckedTask(task, newValue, updatePage);
  }

  function handleViewTask() {
    navigation.navigate("newTask", { task: task, editable: false });
  }

  function handleEditTask() {
    navigation.navigate("newTask", { task: task, editable: true });
  }

  function handleConfirmDelete() {
    Alert.alert("Remover", "Deseja remover a tarefa ?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => handleRemoveTask(task.id, updatePage) },
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

      <View style={{ flex: 1 }}>
        <CardTaskTitle checked={isChecked}>{task.task}</CardTaskTitle>
        <CardTaskTitle checked={isChecked}>
          {task.description &&
          task.description.replace(/\s{2,}/g, " ").length >= 25
            ? `${task.description.replace(/\s{2,}/g, " ").slice(0, 25)}...`
            : task.description.replace(/\s{2,}/g, " ")}
        </CardTaskTitle>
      </View>

      {!isChecked && (
        <>
          <IonIcons icon="pencil-sharp" onPress={handleEditTask} />
          <IonIcons icon="trash" onPress={handleConfirmDelete} />
        </>
      )}

      {isChecked && <IonIcons icon="eye-outline" onPress={handleViewTask} />}
    </CardTaskContainer>
  );
}
