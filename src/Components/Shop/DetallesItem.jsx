import React from 'react'

export default function DetallesItem({detalle123}) {
    return (
        <>
            {detalle123.map((unidad) =>(
                <div>
                    <h1>{unidad.producto}</h1>
                    <h2>{unidad.descripcion}</h2>
                </div>

            )) }
        </>
    )
}
