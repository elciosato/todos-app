import { TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";

export function EditiTodoForm({ task, onSubmitEdit }) {
  const [editTask, handleChange] = useInputState(task);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitEdit(editTask);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", marginLeft: "1rem" }}>
      <TextField
        size="small"
        margin="normal"
        label="Edit Task"
        value={editTask}
        fullWidth
        autoFocus
        onChange={handleChange}
      />
    </form>
  );
}
