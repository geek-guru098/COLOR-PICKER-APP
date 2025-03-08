import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");
  function handlecolorchange(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <p> Selected color:{color}</p>
      <div className="display-color" style={{background:color}}></div>
      <div className="color-select">
        <label htmlFor="#">Select a color:</label>
        <input type="color" onChange={handlecolorchange} value={color} />
      </div>
    </>
  );
}

export default App;
