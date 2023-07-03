import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { Button } from "../../components/Button";
import { CardTask } from "../../components/CardTasks";
import { Header } from "../../components/Header";
import { ListEmpty } from "../../components/ListEmpty";
import { Loading } from "../../components/Loading";
import { useUpdatePage } from "../../hooks/useUpdatePage";
import { Container } from "../../styles/container";
import { ITask } from "./interfaces";
import { fetchTasks } from "./services";
import {
  MyTasksStatus,
  MyTasksStatusCircle,
  MyTasksStatusTitle,
} from "./styles";

export function MyTasks() {
  const navigation = useNavigation();
  const { updatePage, handleUpdatePage } = useUpdatePage();

  const [isLoading, isLoadingSet] = useState<boolean>(true);

  const [tasks, tasksSet] = useState<ITask[]>([]);
  const taskCount = tasks.length;
  const checkedCount = tasks.filter((task) => task.checked).length;

  function handleNewTask() {
    navigation.navigate("newTask", {});
  }

  useFocusEffect(
    useCallback(() => {
      fetchTasks(tasksSet, isLoadingSet);
    }, [updatePage])
  );

  return (
    <Container>
      <Header />

      <MyTasksStatus>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MyTasksStatusTitle type="maids">Criadas</MyTasksStatusTitle>
          <MyTasksStatusCircle>{taskCount}</MyTasksStatusCircle>
        </View>

        {taskCount - checkedCount !== 0 && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyTasksStatusTitle type="pending">Pendentes</MyTasksStatusTitle>
            <MyTasksStatusCircle>
              {taskCount - checkedCount}
            </MyTasksStatusCircle>
          </View>
        )}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MyTasksStatusTitle type="completed">Concluídas</MyTasksStatusTitle>
          <MyTasksStatusCircle>{checkedCount}</MyTasksStatusCircle>
        </View>
      </MyTasksStatus>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardTask task={item} updatePage={handleUpdatePage} />
          )}
          contentContainerStyle={
            tasks.length === 0 ? { marginTop: 40 } : { paddingBottom: 20 }
          }
          ListEmptyComponent={<ListEmpty />}
        />
      )}

      <Button title="Adicionar nova tarefa" onPress={handleNewTask} />
    </Container>
  );
}
