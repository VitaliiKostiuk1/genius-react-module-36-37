function ListComp({ item, deleteItem }) {
  return (
    <>
      <h3>{item.length}</h3>
      <ol>
        {item.map((element) => (
          <li key={element.id}>
            {element.todo}{" "}
            <button onClick={() => deleteItem(element.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListComp;
