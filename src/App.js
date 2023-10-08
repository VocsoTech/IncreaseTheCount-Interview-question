import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="App">
      <h1>Increase the count by hovering the button</h1>
      <button onMouseEnter={increaseCount}>Increase the count</button>
      <p>{count}</p>
    </div>
  );
}
