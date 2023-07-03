type IColorStatus = "maids" | "pending" | "completed";

export type IColorsTitle = {
  type: IColorStatus;
};

export type ITask = {
  id: string;
  task: string;
  description: string;
  checked: boolean;
};
