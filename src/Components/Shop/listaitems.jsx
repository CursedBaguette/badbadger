import React from 'react'
import Items from './items'


export default function ListaItems({pizza}) {
    return (
        <>
            {pizza.map((unidad) =>(
<Items pizza={unidad} />

            )) }
        </>
    )
}
