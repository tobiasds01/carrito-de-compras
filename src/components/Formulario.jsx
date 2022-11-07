import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({agregarProducto}) => {

    const [producto, editarProducto] = useState ({
        nombre:"",
        descripcion:"",
        precio:""
    });

    const {nombre, descripcion, precio} = producto;

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        editarProducto({
            ...producto,
            [e.target.name] : e.target.value,
        })
    };

    const submitForm = (e) => {
        e.preventDefault();

        if(nombre.trim() === "" || precio.trim() === "") {
            setError(true);
            return;
        }

        setError(false);

        producto.id = uuid();

        agregarProducto(producto)

        editarProducto({
            nombre:"",
            descripcion:"",
            precio:""
        })
    };

    return ( 
        <Fragment>
            <h4>Agregar un producto</h4>
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingresar nombre"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        placeholder="Tipo de tapa, idioma, género..."
                        name="descripcion"
                        onChange={handleChange}
                        value={descripcion} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Precio"
                        name="precio"
                        onChange={handleChange}
                        value={precio} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
            {
                error
                ? <h4>El nombre y el precio no pueden estar vacíos</h4>
                : null
            }
        </Fragment>
     );
}
 
export default Formulario;