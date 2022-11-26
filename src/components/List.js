import data from "../data.json";
import { useState } from "react";
import Item from "./Item";
import Form from "./Form";

const List = () => {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addNewTask = (userInput) => {
    let newToDos = [
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(newToDos);
  };

  return (
    <div>
      <Form addNewTask={addNewTask}></Form>
      <div>
        {toDoList.map((todo) => (
          <Item key={todo.id} todo={todo} handleToggle={handleToggle} />
        ))}
      </div>
      <br />
      <button onClick={handleFilter}>Filter completed</button>
    </div>
  );
};

export default List;
