import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { CatchError } from "../../../components/CatchError";
import { TASKS_COLLECTION } from "../../../storage/storageConfig";
import { AppError } from "../../../utils/AppError";
import { IHandleAddTask, ITask } from "./interfaces";

export async function fetchTasks(
  tasksSet: (value: ITask[]) => void,
  isLoadingSet: (value: boolean) => void
) {
  try {
    isLoadingSet(true);
    const response = await tasksGetAll();

    tasksSet(response);
  } catch (err) {
    throw err;
  } finally {
    isLoadingSet(false);
  }
}

export async function tasksGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASKS_COLLECTION);

    const storageTasks: ITask[] = storage ? JSON.parse(storage) : [];

    return storageTasks;
  } catch (err) {
    throw err;
  }
}

export async function handleAddTask({
  newTasks,
  newTasksSet,
  handleUpdatePage,
  newTasksInputRef,
}: IHandleAddTask) {
  if (newTasks.trim().length === 0) {
    return Alert.alert("Nova Tarefa", "Digite uma descrição para sua tarefa.");
  }

  try {
    const newTasksTemp: ITask = {
      task: newTasks,
      checked: false,
    };

    const storageTasks = await tasksGetAll();

    const tasksAlreadyExists = storageTasks.filter(
      (el) => el.task === newTasksTemp.task
    );

    if (tasksAlreadyExists.length > 0) {
      throw new AppError("Nova tarefa", "Tarefa ja cadastrada");
    }

    const storage = JSON.stringify([...storageTasks, newTasksTemp]);

    await AsyncStorage.setItem(TASKS_COLLECTION, storage);

    newTasksInputRef.current?.blur();

    handleUpdatePage();

    newTasksSet("");
  } catch (err) {
    CatchError(err, "Nova Tarefa", "Não foi possível adicionar a tarefa!");
  }
}

export async function handleEditTask(
  task: string,
  newValue: boolean,
  updatePage: () => void
) {
  try {
    const taskEditing: ITask = {
      task: task,
      checked: newValue,
    };

    const storageTasks = await tasksGetAll();

    const newStorageTasks = storageTasks.map((el) =>
      el.task === task ? taskEditing : el
    );

    const tasks = JSON.stringify(newStorageTasks);

    await AsyncStorage.setItem(TASKS_COLLECTION, tasks);

    updatePage();
  } catch (err) {
    CatchError(
      err,
      "Editar Tarefa",
      "Não foi possível editar o status da tarefa!"
    );
  }
}

export async function handleRemoveTask(task: string, updatePage: () => void) {
  try {
    const storageTasks = await tasksGetAll();

    const newStorageTasks = storageTasks.filter((el) => el.task !== task);

    const tasks = JSON.stringify(newStorageTasks);

    await AsyncStorage.setItem(TASKS_COLLECTION, tasks);

    updatePage();
  } catch (err) {
    CatchError(err, "Remover Tarefa", "Não foi possível remover a tarefa!");
  }
}
