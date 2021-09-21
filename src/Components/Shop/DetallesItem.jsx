import React from 'react'
import ItemCount from './itemcount'



export default function DetallesItem({detalle123}) {
    
    return (
        <>
            {detalle123.map((unidad) =>(





                <div className="card cards">
                    <h1>{unidad.producto}</h1>
                    <h2>{unidad.descripcion}</h2>
                    <ItemCount test123={unidad} initial={1} />
                </div>

            )) }
        </>
    )
}
