import React, { useEffect } from "react";

const useEffectBasi = () => {
  const [value, setValue] = React.useState(0);
  useEffect(() =>{
    console.log("Eccomi");
    if (value == 0){
      document.title = "UseEffect"
    } else {
      document.title = `Nuovo messaggio: ${value}`
    }
  })
  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  }
  return (
    <div className="item">
      <h4>Value : <span>{value}</span></h4>
      <button className="btn btn-info" onClick={aumenta}>Aumenta</button>
    </div>
  );
};

export default useEffectBasi;
