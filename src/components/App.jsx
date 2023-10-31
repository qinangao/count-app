import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // function increase() {
  //   setCount(count + 1);
  // }

  // function decrease() {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <h1 className="hero">Count here!</h1>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <p>
        Code by <a href="https://github.com/qinangao">Qinan Gao</a>
      </p>
    </div>
  );
}

export default App;
