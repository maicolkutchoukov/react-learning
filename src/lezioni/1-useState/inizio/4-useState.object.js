import React, { useState } from "react";

const StateObject = () => {
    /* const [name, setName] = useState("Maicol");
    const [age, setAge] = useState(28);
    const [saluto, setSaluto] = useState("Ciao"); */
    const [person, setPerson] = useState({
        name: "Maicol",
        age: 28,
        saluto: "Ciao"
    })

    const cambiaSaluto = () => {
        /* setSaluto("Tanti auguri, ho fatto oggi gli anni!");
        setAge(29); */
        setPerson({
            ...person,
            age: 29,
            saluto: "Ho fatto gli anni!"
        })
    }
    return (
        <div className="item shadow">
            <div>
                <h5>{person.name}</h5>
                <h6>{person.age}</h6>
                <h6>{person.saluto}</h6>
            </div>
            <button className="btn btn-primary" onClick={cambiaSaluto}>Cambia Saluto!</button>
        </div>
    );
};

export default StateObject;
