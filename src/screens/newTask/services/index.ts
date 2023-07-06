import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { CatchError } from "../../../components/CatchError";
import { TASKS_COLLECTION } from "../../../storage/storageConfig";
import { AppError } from "../../../utils/AppError";
import { ITask } from "../../myTasks/interfaces";
import { tasksGetAll } from "../../myTasks/services";
import { IHandleAddTask, IHandleEditTask } from "../interfaces";

export async function handleAddTask({ data, handleGoToHome }: IHandleAddTask) {
  try {
    const newTasksTemp: ITask = {
      id: uuid.v4().toString(),
      task: data.task,
      description: data.description,
      checked: false,
    };

    const storageTasks = await tasksGetAll();

    const tasksAlreadyExists = storageTasks.filter(
      (el) => el.task === newTasksTemp.task
    );

    if (tasksAlreadyExists.length > 0) {
      throw new AppError("Nova tarefa", "Tarefa ja cadastrada");
    }

    const storage = JSON.stringify([newTasksTemp, ...storageTasks]);

    await AsyncStorage.setItem(TASKS_COLLECTION, storage);

    handleGoToHome();
  } catch (err) {
    CatchError(err, "Nova Tarefa", "Não foi possível adicionar a tarefa!");
  }
}

export async function HandleEditTask({
  data,
  task,
  handleGoToHome,
}: IHandleEditTask) {
  try {
    const newTasksTemp: ITask = {
      id: task.id,
      task: data.task,
      description: data.description,
      checked: task.checked,
    };

    const storageTasks = await tasksGetAll();

    const newStorageTasks = storageTasks.map((el) =>
      el.id === task.id ? newTasksTemp : el
    );

    const tasks = JSON.stringify(newStorageTasks);

    await AsyncStorage.setItem(TASKS_COLLECTION, tasks);

    handleGoToHome();
  } catch (err) {
    CatchError(err, "Editar Tarefa", "Não foi possível editar a tarefa!");
  }
}
