const Item = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id}
      onClick={handleClick}
      className={todo.complete ? "completed" : "todo"}
    >
      {todo.task}
    </div>
  );
};
export default Item;
