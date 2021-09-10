import React from 'react'



function Items({pizza}) {
    return (
        <>
            <div className="card cards">
                <img className="card-img-top" src={pizza.foto} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{pizza.producto}</h5>
                    <p className="card-text">{pizza.precio}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </>
    )
}


export default Items