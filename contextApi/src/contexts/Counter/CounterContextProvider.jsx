import { useReducer } from "react";

const CounterContext = createContext()


const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + action.payload };
    case "DEC":
      if(state.count > 0) {
        return { count: state.count - 1 };
      }
      case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const handleInc = () => {
    dispatch({ type: "INC", payload: 2 });
  };

  const handleDec = () => {
    dispatch({ type: "DEC" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };


  const data = {
    count: state.count,
    handleInc,
    handleDec,
    handleReset
  };
  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};

export default CounterContextProvider;
