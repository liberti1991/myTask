export type ICardTask = ICardTaskTitle & {
  task: string;
  updatePage: () => void;
};

export type ICardTaskTitle = {
  checked: boolean;
};
