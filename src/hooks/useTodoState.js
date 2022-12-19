import useLocalStorageState from "./useLocalStorageState";

function useTodoState(initialTodos) {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (editTodo) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === editTodo.id ? { ...editTodo } : todo
      )
    );
  };

  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleEditTodo,
  };
}

export default useTodoState;
