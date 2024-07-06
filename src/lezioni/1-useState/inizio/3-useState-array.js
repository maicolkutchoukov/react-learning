import React, {useState} from "react";
import {data} from '../../../data';

const ArrayState = () => {
    console.log(data)
    const [people, setPeople] = useState(data);
    const removeItem = (id) => {
        let newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }
    return (
        <>
        {
            people.map(person => {
            const {id, name} = person;
            return (
                <div key={id} className="item shadow">
                    <h3>{name}</h3>
                    <button 
                        className="btn delete-button"
                        onClick={() => removeItem(id)}
                    >
                        x
                    </button>
                </div>
            );
            })
        }
        </>
    );
};

export default ArrayState;
