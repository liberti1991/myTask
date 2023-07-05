import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { CardTask } from "../../components/CardTasks";
import { Header } from "../../components/Header";
import { ListEmpty } from "../../components/ListEmpty";
import { useUpdatePage } from "../../hooks/useUpdatePage";
import { Container } from "../../styles/container";
import { ITask } from "./interfaces";
import { fetchTasks } from "./services";
import {
  ContainerStatus,
  MyTasksStatus,
  MyTasksStatusCircle,
  MyTasksStatusTitle,
} from "./styles";

export function MyTasks() {
  const navigation = useNavigation();
  const { updatePage, handleUpdatePage } = useUpdatePage();

  const [tasks, tasksSet] = useState<ITask[]>([]);
  const pending: ITask[] = tasks.filter((task) => !task.checked);
  const completed: ITask[] = tasks.filter((task) => task.checked);

  const taskCount = tasks.length;
  const checkedCount = tasks.filter((task) => task.checked).length;

  const [selectedStatus, selectedStatusSet] = useState<string>("maids");

  function handleNewTask() {
    navigation.navigate("newTask", { editable: true });
  }

  useFocusEffect(
    useCallback(() => {
      fetchTasks(tasksSet);
    }, [updatePage])
  );

  return (
    <Container>
      <Header />

      <MyTasksStatus>
        <ContainerStatus onPress={() => selectedStatusSet("maids")}>
          <MyTasksStatusTitle type="maids">Criadas</MyTasksStatusTitle>
          <MyTasksStatusCircle>{taskCount}</MyTasksStatusCircle>
        </ContainerStatus>

        {taskCount - checkedCount !== 0 && (
          <ContainerStatus onPress={() => selectedStatusSet("pending")}>
            <MyTasksStatusTitle type="pending">Pendentes</MyTasksStatusTitle>
            <MyTasksStatusCircle>
              {taskCount - checkedCount}
            </MyTasksStatusCircle>
          </ContainerStatus>
        )}

        <ContainerStatus onPress={() => selectedStatusSet("completed")}>
          <MyTasksStatusTitle type="completed">Concluídas</MyTasksStatusTitle>
          <MyTasksStatusCircle>{checkedCount}</MyTasksStatusCircle>
        </ContainerStatus>
      </MyTasksStatus>

      <FlatList
        data={
          selectedStatus === "maids"
            ? tasks
            : selectedStatus === "pending"
            ? pending
            : completed
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTask task={item} updatePage={handleUpdatePage} />
        )}
        contentContainerStyle={
          tasks.length === 0 ? { marginTop: 40 } : { paddingBottom: 20 }
        }
        ListEmptyComponent={<ListEmpty />}
      />

      <Button title="Adicionar nova tarefa" onPress={handleNewTask} />
    </Container>
  );
}
