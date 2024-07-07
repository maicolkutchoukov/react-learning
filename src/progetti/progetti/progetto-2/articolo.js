import React, {useEffect, useState} from 'react'


const Articolo = ({ body, title }) => {
    return (
      <article className='col-4 g-5 mx-3'>
        <div style={{ position: "relative", height: "fit-content" }}>
          <h4> {title} </h4>
          <div className="underline"></div>
        </div>
        <p> {body}</p>
      </article>
    );
  };

export default Articolo
