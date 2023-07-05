import { ITask } from "../myTasks/interfaces";

export type IRouteParams = {
  task: ITask;
  editable: boolean;
};

export type FormData = {
  task: string;
  description: string;
};

export type NewTaskProps = {
  task: string;
  description: string;
};

export type IHandleAddTask = {
  data: NewTaskProps;
  handleGoToHome: () => void;
};

export type IHandleEditTask = IHandleAddTask & {
  task: ITask;
};
