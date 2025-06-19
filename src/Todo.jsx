import { useState } from "react";
import TodoEdit from "./TodoEdit";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    // console.log("added");
    const newTodo = [...todos, value];
    // console.log("added 2", newTodo);
    setTodos(newTodo);

    // clear value
    setValue("");
  };

  const handleClick = (id) => {
    // console.log("todo id", id, todos)
    const newTodos = todos.filter((_, index) => index !== id)
    // console.log("newTodos", newTodos)
    setTodos(newTodos)
  }

  return (
    <div className="">
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>

      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="">
              <span>{todo}</span>
              <button onClick={() => handleClick(index)}>Delete</button>
              <TodoEdit />

            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
