import AsyncStorage from "@react-native-async-storage/async-storage";
import { CatchError } from "../../../components/CatchError";
import { TASKS_COLLECTION } from "../../../storage/storageConfig";
import { ITask } from "../interfaces";

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

export async function handleEditCheckedTask(
  task: ITask,
  newValue: boolean,
  updatePage: () => void
) {
  try {
    const taskEditing = {
      id: task.id,
      task: task.task,
      description: task.description,
      checked: newValue,
    };

    const storageTasks = await tasksGetAll();

    const newStorageTasks = storageTasks.map((el) =>
      el.id === task.id ? taskEditing : el
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

export async function handleRemoveTask(id: string, updatePage: () => void) {
  try {
    const storageTasks = await tasksGetAll();

    const newStorageTasks = storageTasks.filter((el) => el.id !== id);

    const tasks = JSON.stringify(newStorageTasks);

    await AsyncStorage.setItem(TASKS_COLLECTION, tasks);

    updatePage();
  } catch (err) {
    CatchError(err, "Remover Tarefa", "Não foi possível remover a tarefa!");
  }
}
