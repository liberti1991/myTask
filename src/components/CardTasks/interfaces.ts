import { ITask } from "../../screens/myTasks/interfaces";

export type ICardTask = {
  task: ITask;
  updatePage: () => void;
};

export type ICardTaskTitle = {
  checked: boolean;
};
