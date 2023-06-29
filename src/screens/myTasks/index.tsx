import { useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ITask, handleAddTask, tasksGetAll } from "./services";
import {
  MyTasksContainer,
  MyTasksContainerTasks,
  MyTasksForm,
  MyTasksStatus,
  MyTasksStatusCircle,
  MyTasksStatusTitle,
} from "./styles";

export function MyTasks() {
  const [newTasks, newTasksSet] = useState<string>("");
  const [isLoading, isLoadingSet] = useState<boolean>(true);
  const newTasksInputRef = useRef<TextInput>(null);

  const [tasks, tasksSet] = useState<ITask[]>([]);
  const taskCount = tasks.length;
  const checkedCount = tasks.filter((task) => task.checked).length;

  async function fetchTasks() {
    try {
      const response = await tasksGetAll();

      tasksSet(response);
    } catch (err) {
      console.log(err);
    }
  }

  console.log("Retorno", tasks);

  useEffect(() => {
    fetchTasks();
  }, [newTasks]);

  return (
    <MyTasksContainer>
      <Header />

      <MyTasksForm>
        <Input
          inputRef={newTasksInputRef}
          value={newTasks}
          onChangeText={newTasksSet}
          autoCorrect={false}
          placeholder="Adicione uma nova tarefa"
          onSubmitEditing={() =>
            handleAddTask({ newTasks, newTasksSet, newTasksInputRef })
          }
          returnKeyType="done"
        />

        <ButtonIcon
          icon="add-circle-outline"
          onPress={() =>
            handleAddTask({ newTasks, newTasksSet, newTasksInputRef })
          }
        />
      </MyTasksForm>

      <MyTasksContainerTasks>
        <MyTasksStatus>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyTasksStatusTitle type="maids">Criadas</MyTasksStatusTitle>
            <MyTasksStatusCircle>{taskCount}</MyTasksStatusCircle>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyTasksStatusTitle type="completed">Concluídas</MyTasksStatusTitle>
            <MyTasksStatusCircle>{checkedCount}</MyTasksStatusCircle>
          </View>
        </MyTasksStatus>
      </MyTasksContainerTasks>
    </MyTasksContainer>
  );
}

type IColorStatus = "maids" | "completed";

export type IColorsTitle = {
  type: IColorStatus;
};
