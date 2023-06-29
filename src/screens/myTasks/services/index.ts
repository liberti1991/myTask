import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, TextInput } from "react-native";
import { TASKS_COLLECTION } from "../../../storage/storageConfig";
import { AppError } from "../../../utils/AppError";

export async function handleAddTask({
  newTasks,
  newTasksSet,
  newTasksInputRef,
}: IHandleAddTask) {
  if (newTasks.trim().length === 0) {
    return Alert.alert("Nova Tarefa", "Digite uma descrição ra sua tarefa.");
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
      throw new AppError("Tarefa ja cadastrada");
    }

    const storage = JSON.stringify([...storageTasks, newTasksTemp]);

    await AsyncStorage.setItem(TASKS_COLLECTION, storage);

    newTasksInputRef.current?.blur();

    newTasksSet("");
  } catch (err) {
    console.log(err);
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

export type IHandleAddTask = {
  newTasks: string;
  newTasksSet: (value: string) => void;
  newTasksInputRef: React.RefObject<TextInput>;
};

export type ITask = {
  task: string;
  checked: boolean;
};
