type IStatus = "maids" | "pending" | "completed";

export type IStatusProps = {
  type: IStatus;
};

export type ITask = {
  id: string;
  task: string;
  description: string;
  checked: boolean;
};
