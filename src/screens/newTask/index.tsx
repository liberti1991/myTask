import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { TextInput } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useUpdatePage } from "../../hooks/useUpdatePage";
import { Container } from "../../styles/container";
import { handleAddTask } from "../myTasks/services";
import { MyTasksForm } from "./styles";

export function NewTask() {
  const navigation = useNavigation();

  const [newTasks, newTasksSet] = useState<string>("");
  const newTasksInputRef = useRef<TextInput>(null);
  const { updatePage, handleUpdatePage } = useUpdatePage();

  function handleGoToHome() {
    navigation.navigate("myTasks");
  }

  return (
    <Container>
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
              newTasksInputRef,
            })
          }
        />
      </MyTasksForm>

      <Button title="Cadastrar tarefa" onPress={handleGoToHome} />
    </Container>
  );
}
