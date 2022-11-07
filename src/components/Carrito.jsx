import React, { Fragment } from 'react';
import Producto from './Producto';
import '../Carrito.css';
import { v4 as uuid } from 'uuid';

const Carrito = ({carrito, agregarAlCarrito}) => {

    const eliminarProducto = (id) => {
        const productosNuevos = carrito.filter(producto => producto.id !== id);
        agregarAlCarrito(productosNuevos);
    }

    return ( 
        <Fragment>
            <div className="carrito">
                <h3>Carrito</h3>
                {
                carrito.map(producto => (
                    <Producto
                        key={uuid()}
                        producto={producto}
                        eliminarProducto={eliminarProducto}
                    />
                ))
                }
            </div>
        </Fragment>
     );
}
 
export default Carrito;