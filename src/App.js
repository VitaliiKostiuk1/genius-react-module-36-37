import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComp from "./components/inputComp";
import ListComp from "./components/ListComp";
import KeyComp from "./components/KeyComp";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const onClickHandler = () => {
    if (input.trim() === "") return;
    const newEl = [...item, input];
    setItem(newEl);
    setInput("");
  };

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Add your TO DO list</h1>

        <InputComp input={input} onChange={onChange} />
        <KeyComp onClickHandler={onClickHandler} />

        <ListComp item={item} />
      </header>
    </div>
  );
}

export default App;
