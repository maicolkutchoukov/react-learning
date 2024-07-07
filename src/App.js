import { useState, useEffect } from "react";
import data from "./progetti/progetti/progetto-2/articles";
import Articolo from "./progetti/progetti/progetto-2/articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {
  //Stato iniziale per la nostra modalità
  const [theme, setTheme] = useState(getFromLocalStorage());

  //Cambia il valore dello staate theme
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    //Attacca classe al html tag
    document.documentElement.className = theme;

    //inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <section className="section-center">
      <div className="container">
        <div className="text-center">
          <button className="btn btn-info text-center" onClick={cambiaTema}>
            Cambia
          </button>
        </div>

        <section className="article-section row justify-content-center">
          {data.map((el) => (
            <Articolo key={el.id} {...el} className="col-4" />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;