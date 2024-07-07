import React, { useState, useEffect } from "react";

const HideorShowComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="card shadow mt-5 p-5" onClick={()=>setShow(!show)}>
      <button className="button w-50 col-6 offset-3 shadow">
        {
          show ? "nascondi" : "mostra"
        }
      </button>
      {show && <Elemento/>}
    </div>
  );
};

const Elemento = () => {
  const [contatore, setContatore] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => oldValue + 1)
    }, 1000);
    return () => clearTimeout(timer)
  }, [contatore])
  return (
    <div>
      <h2>{contatore}</h2>
    </div>
    )
}
export default HideorShowComponent;
