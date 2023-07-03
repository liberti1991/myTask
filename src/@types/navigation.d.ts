import { ITask } from "../screens/myTasks/interfaces";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      myTasks: undefined;
      newTask: {
        task?: ITask;
      };
    }
  }
}
