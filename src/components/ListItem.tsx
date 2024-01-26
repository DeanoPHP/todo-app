import { FaTimes } from "react-icons/fa";

function ListItem({ todo, setTodo }) {
  const deleteTodo = () => {
    const getToRemove = localStorage.getItem("todo");
    const todos = JSON.parse(getToRemove);

    todos.filter((item) => {
      if (item === todo) {
        localStorage.removeItem(item);
        localStorage.setItem("todo", JSON.stringify(todos.filter((item) => item !== todo)));
        window.location.reload();
      }
    });
  }

  return (
    <li className="shadow border rounded w-5/6 mx-auto py-2 px-3 mb-2 text-blue-500 leading-tight focus:outline-none flex justify-between">
      {todo}
      <div className="cursor-pointer" onClick={deleteTodo}>       
        <FaTimes />       
      </div>
    </li>
  );
}

export default ListItem;
