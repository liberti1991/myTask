import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "../../styles/container";
import { ITask } from "../myTasks/interfaces";
import { FormData } from "./interfaces";
import { HandleEditTask, handleAddTask } from "./services";
import { MyTasksForm } from "./styles";

type IRouteParams = {
  task: ITask;
};

export function NewTask() {
  const navigation = useNavigation();
  const { handleSubmit, control, setValue } = useForm<FormData>();

  const route = useRoute();
  const { task } = route.params as IRouteParams;

  if (task) {
    useEffect(() => {
      setValue("task", task.task);
      setValue("description", task.description);
    }, []);
  }

  function handleGoToHome() {
    navigation.navigate("myTasks");
  }

  const onSubmit = (data: FormData) => {
    if (task) {
      HandleEditTask({ task, data, handleGoToHome });
    } else {
      handleAddTask({ data, handleGoToHome });
    }
  };

  return (
    <Container>
      <Header />
      <MyTasksForm>
        <Controller
          control={control}
          name="task"
          render={({ field: { value, onChange } }) => {
            return (
              <Input
                title="Titulo da tarefa"
                value={value}
                onChangeText={onChange}
                autoCorrect={false}
                placeholder="Adicione uma nova tarefa"
                onSubmitEditing={() => {}}
                returnKeyType="done"
              />
            );
          }}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <Input
              title="Descrição"
              multiline
              textAlignVertical="top"
              value={value}
              onChangeText={onChange}
              placeholder="Adicione uma nova tarefa"
              onSubmitEditing={() => {}}
              returnKeyType="done"
            />
          )}
        />
      </MyTasksForm>

      <Button title="Cadastrar tarefa" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
}
