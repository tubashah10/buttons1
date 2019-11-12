import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [activeButton, setActiveButton] = useState("")

  function handleClick(e){
    let id = e.target.id;
    setActiveButton(id);
  }

  // condition ? outcomeIfTrue : outcomeIfFalse

  return (
    <div className="App">
      <button id="first" className={(activeButton == "first") ? "Active" : ""} onClick={handleClick}>First</button>
      <button id="second" onClick={handleClick}>Second</button>
      <button id="third" onClick={handleClick}>Third</button>
      {activeButton}
    </div>
  );
}

export default App;
