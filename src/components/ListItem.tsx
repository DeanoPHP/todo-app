function ListItem({ todo }) {
  return (
    <li className="shadow border rounded w-5/6 mx-auto py-2 px-3 mb-2 text-blue-500 leading-tight focus:outline-none">
      {todo}
    </li>
  );
}

export default ListItem;
