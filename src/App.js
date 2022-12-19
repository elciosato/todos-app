import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import "./App.css";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

function App() {
  const defaultTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ];

  const {
    todos,
    handleAddTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodoState(defaultTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with Rooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={6}>
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
            todos={todos}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
