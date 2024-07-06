import React, {useState} from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  /* incrementCounter(counter) = counter++;
  decrementCounter(counter) = counter--;
  resetCounter(counter) = 0 */
  const reset = () => {
    setCounter(0);
  };
  const aumenta = () =>{
    setCounter(oldValue => {
      if (oldValue + 1 == 5){
        return oldValue
      }
      return oldValue + 1
    })
    
  };
  return (
    <div className="bg-white shadow rounder py-5 w-75 col-6 offset-3">
      <h2>{counter}</h2>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-info ms-4"onClick={() => setCounter(counter - 1)}>Diminuisci</button>
        <button className="btn btn-info me-4" onClick={aumenta}>Aumenta</button>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn reset-button" onClick={reset}>Azzera</button>
      </div>
    </div>
  );
};

export default CounterComponent;
