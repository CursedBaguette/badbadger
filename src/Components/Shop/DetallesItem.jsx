import React from 'react'
import ItemCount from './itemcount'



export default function DetallesItem({detalle123}) {
    
    return (
        <>
            {detalle123.map((unidad) =>(





                <div className="card cardsdetalles d-flex justify-content-center">
                    <h1 className="titulos123" align="center">{unidad.producto}</h1>
                    <h4 className="titulos123" align="center">{unidad.descripcion}</h4>
                    <img className="card-img-top2" src={unidad.foto} alt="cap" />
                    <div align="right" className="titulos123"><ItemCount test123={unidad} initial={1} /></div>
                </div>

            )) }
        </>
    )
}
