import "./Count.css";
import React, { useState } from "react";
const Count = () => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    if (!count == 0) setCount(count - 1);
  };
  return (
    <div className="Count">
      <div>
        <h3>Счетчик:</h3>
        <h2>{count}</h2>
        <button onClick={onClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
};
export default Count;
