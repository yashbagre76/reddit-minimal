import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import hooks from react-redux
import { increment, decrement, incrementByAmount } from "./CounterSlice"; // import actions from CounterSlice

export function Counter() {
  // Use the useSelector hook to access the Redux store's state
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); // Use the useDispatch hook to dispatch actions

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}
