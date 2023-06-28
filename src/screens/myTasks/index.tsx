import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MyTasksContainer, MyTasksForm } from "./styles";

export function MyTasks() {
  return (
    <MyTasksContainer>
      <Header />

      <MyTasksForm>
        <Input placeholder="Adicione uma nova tarefa" />

        <ButtonIcon icon="add-circle-outline" />
      </MyTasksForm>
    </MyTasksContainer>
  );
}
