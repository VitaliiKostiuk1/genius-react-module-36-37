import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComp from "./components/inputComp";
import ListComp from "./components/ListComp";
import KeyComp from "./components/KeyComp";

const toDo = [
  { id: "1", todo: "First todo" },
  { id: "2", todo: "Second todo" },
  { id: "3", todo: "Third todo" },
];

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(toDo);

  const onClickHandler = () => {
    if (input.trim() === "") return;
    const newEl = [...item, { id: Date.now(), todo: input }];
    setItem(newEl);
    setInput("");
  };

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const deleteItem = (id) => {
    setItem(item.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Add your TO DO list</h1>

        <InputComp input={input} onChange={onChange} />
        <KeyComp onClickHandler={onClickHandler} />

        <ListComp item={item} deleteItem={deleteItem} />
      </header>
    </div>
  );
}

export default App;
