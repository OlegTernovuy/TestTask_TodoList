import { useEffect, useState } from "react";
import {
  addTodo,
  deleteTodo,
  getTodoList,
  updateTodo,
} from "../../services/todoList.service";
import Todo from "./Todo";
import { ITodoList } from "../../types";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodoList[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodoList()
      .then((data) => setTodos(data))
      .catch((err: Error) => console.log(err));
  };

  const handleAddNewTodo = (title: string, status: string): void => {
    addTodo(title, status)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (id: number, status: string): void => {
    updateTodo(id, status)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (id: number): void => {
    deleteTodo(id)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="mb-4 text-base md:text-xl">
        NestJS and ReactJS Todo List
      </h1>
      <div className="overflow-x-scroll max-w-4xl md:max-w-full">
        <div className="flex justify-between w-full min-w-max py-4 bg-slate-200">
          <span className="min-w-16 w-1/12">ID</span>
          <h3 className="min-w-80 w-5/12">Title</h3>
          <span className="min-w-48 w-3/12">Status</span>
          <span className="min-w-48 w-3/12">Delete</span>
        </div>
        <ul className="list-none bg-slate-300 min-w-max">
          {todos &&
            todos?.map((todo) => (
              <li key={todo.id}>
                <Todo
                  todo={todo}
                  DeleteTodo={handleDeleteTodo}
                  UpdateTodo={handleUpdateTodo}
                />
              </li>
            ))}
        </ul>
      </div>
      <AddNewTodo handleAddNewTodo={handleAddNewTodo} />
    </div>
  );
};

export default TodoList;
