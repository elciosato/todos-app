import { Fragment } from "react";
import { Divider, List, Paper } from "@mui/material";
import { Todo } from "./Todo";

export function TodoList(props) {
  const { todos, onDeleteTodo, onToggleTodo, onEditTodo } = props;

  if (!todos || todos.length === 0) {
    return null;
  }

  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <Fragment key={todo.id}>
            <Todo
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
              onEditTodo={onEditTodo}
              todo={todo}
            />
            {index < todos.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}
