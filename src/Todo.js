import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { EditiTodoForm } from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";

export function Todo({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) {
  const { id, task, completed } = todo;

  const [isEditing, toggleIsEditing] = useToggleState();

  const handleClickDelete = () => {
    onDeleteTodo(id);
  };

  const handleClickToggle = () => {
    onToggleTodo(id);
  };

  const handleSubmitEdit = (newTask) => {
    const editTodo = {
      id,
      task: newTask,
      completed,
    };
    onEditTodo(editTodo);
    toggleIsEditing();
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditiTodoForm onSubmitEdit={handleSubmitEdit} task={task} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={handleClickToggle}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={handleClickDelete} aria-label="Delete">
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
