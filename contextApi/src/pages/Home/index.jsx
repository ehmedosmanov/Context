import React, { useContext } from "react";
import CounterContext from "../../contexts/Counter/CounterContextProvider";

const Home = () => {
  const { count, handleInc, handleDec, handleReset } = useContext(CounterContext);

  console.log(count);
  return (
    <>
      <div>Home</div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Home;
