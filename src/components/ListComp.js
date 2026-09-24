function ListComp({ item }) {
  return (
    <>
      <h3>{item.length}</h3>
      <ol>
        {item.map((element, index) => (
          <li key={`${element}-${index}`}>{element}</li>
        ))}
      </ol>
    </>
  );
}

export default ListComp;
