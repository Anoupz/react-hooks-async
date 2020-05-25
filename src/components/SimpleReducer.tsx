import React, { useReducer } from "react";

type initialStateType = {
  count: number;
};

const initialState = {
  count: 0,
};

const counterReducer = (state: initialStateType, action: { type: string }) => {
  switch (action.type) {
    case "Reset":
      return initialState;
    case "Increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const SimpleReducer: React.FC = () => {
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h2>Current Count is {count}</h2>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default SimpleReducer;
