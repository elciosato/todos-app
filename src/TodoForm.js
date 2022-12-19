import { Paper, TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { v4 as uuidV4 } from "uuid";
export function TodoForm(props) {
  const { onAddTodo } = props;
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidV4(),
      task: value,
      completed: false,
    };
    onAddTodo(newTodo);
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          margin="normal"
          label="Add new Todo"
          value={value}
          fullWidth
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}
