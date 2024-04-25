import { IChangeTodo, ITodoProps } from "../../types";
import { MenuItem, Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { options } from "../../constant";

const Todo = ({ todo, DeleteTodo, UpdateTodo }: ITodoProps) => {
  const { handleSubmit, control } = useForm<IChangeTodo>({
    defaultValues: {
      selectedStatus: todo.status,
    },
  });

  const submitFields = handleSubmit((data) => {
    try {
      UpdateTodo(todo.id, data.selectedStatus);
    } catch (error: any) {
      console.error("Error change todo: ", error);
      throw error;
    }
  });

  return (
    <div className="flex justify-between w-full py-4">
      <span className="min-w-16 md:w-1/12">{todo.id}</span>
      <h3 className="min-w-80 md:w-5/12">{todo.title}</h3>
      <Controller
        control={control}
        name="selectedStatus"
        render={({ field }) => (
          <Select
            value={field.value}
            defaultValue="Pending"
            onChange={(e) => {
              field.onChange(e.target.value);
              submitFields();
            }}
            className="min-w-48 md:w-3/12"
            size="small"
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                className="text-sm md:text-base"
              >
                {option.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <button
        className="min-w-48 md:w-3/12"
        onClick={() => DeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
