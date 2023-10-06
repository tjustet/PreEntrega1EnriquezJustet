import React from 'react';

const productos = [
    {alimento: "hamburguesa", precio: 100}, 
    {alimento: "empanada", precio: 50}, 
    {alimento: "pizza", precio: 120}, 
]

function ItemListContainer() {
    return (
        <div style={{paddingLeft: '5%'}}>
            <h1>Productos</h1>
            <ul>
                {productos.map((producto) => (
                    <li>
                        {producto.alimento}= ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
  }
  
export default ItemListContainer;


