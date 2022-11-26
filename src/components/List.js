import data from "../data.json";
import {useState} from "react";
import Item from "./Item";


const List = () => {
      const [toDoList, setToDoList] = useState(data);

      const handleToggle = (id) => {
            let mapped = toDoList.map(task => {
                  return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
            });
            setToDoList(mapped);
      }

      return (<div>
            {toDoList.map(todo => <Item key={todo.id} todo={todo} handleToggle={handleToggle}/>)}
      </div>)
}


export default List;