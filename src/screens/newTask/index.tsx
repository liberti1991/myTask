import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Error } from "../../components/Error";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "../../styles/container";
import { FormData, IRouteParams } from "./interfaces";
import { schemaNewTask } from "./schema";
import { HandleEditTask, handleAddTask } from "./services";
import { MyTasksForm } from "./styles";

export function NewTask() {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schemaNewTask) });

  const route = useRoute();
  const { task, editable } = route.params as IRouteParams;

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
      <Header showBtn />

      <MyTasksForm>
        <Controller
          control={control}
          name="task"
          render={({ field: { value, onChange } }) => {
            return (
              <>
                <Input
                  title="Titulo da tarefa"
                  value={value}
                  onChangeText={onChange}
                  autoCorrect={false}
                  maxLength={31}
                  placeholder="Adicione uma nova tarefa"
                  editable={editable}
                  returnKeyType="done"
                />
                {errors.task && <Error error={errors.task.message} />}
              </>
            );
          }}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <>
              <Input
                title="Descrição"
                multiline
                textAlignVertical="top"
                value={value}
                maxLength={151}
                onChangeText={onChange}
                placeholder="Adicione uma nova tarefa"
                editable={editable}
                returnKeyType="done"
              />

              {errors.description && (
                <Error
                  error={errors.description.message}
                  marginProps="55px 0 0"
                />
              )}
            </>
          )}
        />
      </MyTasksForm>

      <Button
        title={
          editable === false
            ? "Voltar"
            : task
            ? "Atualizar tarefa"
            : "Cadastrar tarefa"
        }
        onPress={() => {
          if (editable === false) {
            handleGoToHome();
          } else {
            handleSubmit(onSubmit)();
          }
        }}
      />
    </Container>
  );
}
