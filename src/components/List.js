import data from "../data.json";
import {useState} from "react";


const List = () => {
      const [ toDoList, setToDoList ] = useState(data);

      return (<div>
             {toDoList.map(todo => {
              return <div>{todo.task}</div>
           })}
      </div>)
}

export default List;