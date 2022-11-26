import data from "../data.json";
import {useState} from "react";
import Item from "./Item";


const List = () => {
      const [ toDoList, setToDoList ] = useState(data);

      return (<div>
             {toDoList.map(todo => <Item key={todo.id} todo={todo}/>)}
      </div>)
}


export default List;