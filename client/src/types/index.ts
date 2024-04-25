export interface ITodoList {
  id: number;
  title: string;
  status: string;
}

export interface ITodoProps {
  todo: ITodoList;
  DeleteTodo: (id: number) => void;
  UpdateTodo: (id: number, status: string) => void;
}

export interface IAddNewTodoProps {
  handleAddNewTodo: (title: string, selectedStatus: string) => void;
}

export interface IAddNewTodo {
  title: string;
  selectedStatus: string;
}

export interface IChangeTodo {
  selectedStatus: string;
}
