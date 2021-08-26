import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <a title="decrement" onClick={() => dispatch(decNumber())}>
        -
      </a>
      <input type="text" readOnly value={myState} />
      <a title="increment" onClick={() => dispatch(incNumber())}>
        +
      </a>
    </div>
  );
}
