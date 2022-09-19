import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="generator">Color</label>
          <input
            type="text"
            id="generator"
            value={color}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
