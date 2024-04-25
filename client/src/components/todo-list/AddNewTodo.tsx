import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAddNewTodo, IAddNewTodoProps } from "../../types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { options } from "../../constant";

const AddNewTodo = ({ handleAddNewTodo }: IAddNewTodoProps) => {
  const { handleSubmit, control, reset } = useForm<IAddNewTodo>({
    defaultValues: {
      title: "",
      selectedStatus: "Pending",
    },
  });

  const submitFields: SubmitHandler<IAddNewTodo> = (data) => {
    try {
      handleAddNewTodo(data.title, data.selectedStatus);
      reset();
    } catch (error: any) {
      console.error("Error post todo: ", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 mt-4 bg-slate-200">
      <h3>Add new Todo</h3>
      <form
        className="flex flex-col md:flex-row gap-4 py-4"
        onSubmit={handleSubmit(submitFields)}
      >
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              label="Your todo"
              variant="outlined"
              placeholder="Your todo"
              required
              onChange={(e) => field.onChange(e)}
              value={field.value}
              className="w-full md:w-64"
              size="small"
            />
          )}
        />
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Controller
            control={control}
            name="selectedStatus"
            render={({ field }) => (
              <Select
                label="Status"
                value={field.value}
                defaultValue="Pending"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                className="w-full md:w-64"
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
        </FormControl>
        <button className="p-2 border border-slate-300 rounded-md min-w-60">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewTodo;
