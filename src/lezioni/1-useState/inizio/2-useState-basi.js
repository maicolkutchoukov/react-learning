import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  const [titolo, setTitolo] = useState("Hello World!!");
  const cambiaTitolo = () => {
    if (titolo === "Hello World!!") {
        setTitolo("Ciao Mondo!!");
    } else {
        setTitolo("Hello World!!");
    }
};
  return (
    <>
        <h2>{titolo}</h2>
        <button onClick={cambiaTitolo} className="btn btn-info my-3">Cambia Titolo</button>
    </>
  );
};

export default UsoBase;
