import { TextInput } from "react-native";

export type IHandleAddTask = {
  newTasks: string;
  newTasksSet: (value: string) => void;
  handleUpdatePage: () => void;
  newTasksInputRef: React.RefObject<TextInput>;
};

export type ITask = {
  task: string;
  checked: boolean;
};
