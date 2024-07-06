import React, { useState } from 'react'
import { dati } from '../../../data'

const Progetto1 = () => {
    console.log(dati);
    const [people, setPeople] = useState(dati);
    console.log(people);
    const removeItem = (id) => {
        let newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }
    const removeAll = () => {
        setPeople([]);
    }
    const reloadPeople = () => {
        setPeople(dati)
    }
  return (
    <section className='d-flex text-center my-3 m-auto d-flex flex-column align-items-center w-75 justify-content-center'>
        <h1>Prossimi Incontri</h1>
        {
            people.map(person => {
                const {id, nome, stato, img} = person;
                return (
                    <div key = {id} className='item m-0 w-75 bg-dark text-white text-start mb-1'>
                        <div className='img-container'>
                            <img src={img} alt="immagine" className='rounded-circle'/>
                        </div>
                        <div className='description px-4 flex-grow-1'>
                            <h4>{nome}</h4>
                            <p>{stato}</p>
                        </div>
                        <div className='btn-container'>
                            <button className='btn delete-button' onClick={()=>removeItem(id)}>X</button>
                        </div>
                    </div>
                )
            })
        }
        <div className='d-flex justify-content-around w-75 mt-3'>
            <button className='btn btn-info border-dark' onClick={reloadPeople}>Reload</button>
            <button className='btn delete-button border-dark' onClick={removeAll}>Delete All</button>
        </div>
    </section>
  )
}

export default Progetto1;
