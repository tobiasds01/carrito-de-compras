import React, { Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../Producto.css';

const Producto = ({producto, listaProductos, carrito, agregarAlCarrito, eliminarProducto}) => {

    const { id, nombre, descripcion, precio } = producto;

    const seleccionarProducto = (id) => {
        const productos = listaProductos.filter(producto => producto.id === id)[0];
        agregarAlCarrito([...carrito, productos]);
        console.log(carrito)
    };

    return ( 
        <Fragment>
            <div className='producto'>
                <Badge bg="secondary">
                    <p>{nombre}</p>
                    <p>{descripcion}</p>
                    <p>{precio}</p>

                    {
                        listaProductos 
                        ?
                        <Button 
                            variant="info"
                            onClick={() => seleccionarProducto(producto.id)}
                        >Agregar al carrito</Button>
                        :
                        <Button 
                            variant="danger"
                            onClick={() => eliminarProducto(producto.id)}
                        >Eliminar</Button>
                    }
                </Badge>
            </div>
        </Fragment>
     );
}
 
export default Producto;