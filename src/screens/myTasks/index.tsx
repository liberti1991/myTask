import { useEffect, useRef, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CardTask } from "../../components/CardTasks";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ListEmpty } from "../../components/ListEmpty";
import { Loading } from "../../components/Loading";
import { useUpdatePage } from "../../hooks/useUpdatePage";
import { fetchTasks, handleAddTask } from "./services";
import { ITask } from "./services/interfaces";
import {
  MyTasksContainer,
  MyTasksContainerTasks,
  MyTasksForm,
  MyTasksStatus,
  MyTasksStatusCircle,
  MyTasksStatusTitle,
} from "./styles";

export function MyTasks() {
  const { updatePage, handleUpdatePage } = useUpdatePage();

  const [isLoading, isLoadingSet] = useState<boolean>(true);

  const [newTasks, newTasksSet] = useState<string>("");
  const newTasksInputRef = useRef<TextInput>(null);

  const [tasks, tasksSet] = useState<ITask[]>([]);
  const taskCount = tasks.length;
  const checkedCount = tasks.filter((task) => task.checked).length;

  useEffect(() => {
    fetchTasks(tasksSet, isLoadingSet);
  }, [updatePage]);

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
            handleAddTask({
              newTasks,
              newTasksSet,
              handleUpdatePage,
              newTasksInputRef,
            })
          }
          returnKeyType="done"
        />

        <ButtonIcon
          icon="add-circle-outline"
          onPress={() =>
            handleAddTask({
              newTasks,
              newTasksSet,
              handleUpdatePage,
              newTasksInputRef,
            })
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.task}
          renderItem={({ item }) => (
            <CardTask
              task={item.task}
              checked={item.checked}
              updatePage={handleUpdatePage}
            />
          )}
          contentContainerStyle={
            tasks.length === 0 ? { marginTop: 40 } : { paddingBottom: 20 }
          }
          ListEmptyComponent={<ListEmpty />}
        />
      )}
    </MyTasksContainer>
  );
}
