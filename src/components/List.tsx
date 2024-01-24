import { useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const onChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== "") {
      setTodo([...todo, newTodo]);
    }

    setNewTodo("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Form</h1>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="newTodo"
          value={newTodo}
          placeholder="Name"
          onChange={onChange}
        />

        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>

      <div>
        <ul>
          {todo.map((item, index) => (
            <ListItem key={index} todo={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
