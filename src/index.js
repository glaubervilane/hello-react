import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={reset}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
