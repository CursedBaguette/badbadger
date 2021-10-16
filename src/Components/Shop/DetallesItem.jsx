import React from 'react'
import ItemCount from './itemcount'
import { CartContextUse } from '../context/cartContext'


export default function DetallesItem({detalle123}) {
    const {addItem, removeItem} = CartContextUse();
    let iterador = detalle123;


    const onAdd = (qty) => {
            addItem(iterador, qty)
                            }

    const onRemove = (qty) => {
        removeItem(iterador, qty)
                                }
    





    return (
        <>

                <div className="card cardsdetalles d-flex justify-content-center" key={detalle123.id}>
                    <h1 className="titulos123" align="center">{detalle123.producto}</h1>
                    <h4 className="titulos123" align="center">{detalle123.descripcion}</h4>
                    <img className="card-img-top2" src={detalle123.foto} alt="cap" />
                    <div align="right" className="titulos123"><ItemCount test123={iterador} initial={1} onAdd={onAdd} removeItem={onRemove} /></div>
                    
                </div>

            )
        </>
    )
}
