import React from 'react'
import { Link } from 'react-router-dom'



function Items({ pizza }) {
    let linkero = `/cat/${pizza.categoria}/${pizza.id}`
    return (
        <>
                <div className="card cards" key={pizza.id}>
                    <img className="card-img-top" src={pizza.foto} alt="cap" />
                    <div className="card-body">
                        <h5 className="card-title">{pizza.producto}</h5>
                        <p className="card-text">{pizza.precio}</p>
                        <div className="d-flex justify-content-around">
                        <Link to={linkero} className="btn btn-primary">Ingredientes</Link>
                        <Link to='/cart/' className="btn btn-primary">Comprar</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}


export default Items