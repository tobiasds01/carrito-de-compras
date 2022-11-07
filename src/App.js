import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Producto from './components/Producto'; 
import Carrito from './components/Carrito';

function App() {

  const [listaProductos, editarListaProductos] = useState([
    {nombre: 'Este Dolor No Es Mio - Wolynn Mark', 
    descripcion: 'Tapa blanda, castellano, autoayuda', 
    precio: '$4410',
    id: uuid()},
    {nombre: 'Damián - Un Secreto Oscuro Y Perverso - Alex Mirez', 
    descripcion: 'Tapa blanda, castellano, novela, ciencia ficción', 
    precio: '$3149',
    id: uuid()},
    {nombre: 'Basta De Amores De Mierda - El Pela Gonzalo Romero', 
    descripcion: 'Tapa blanda, castellano, autoayuda', 
    precio: '$1529',
    id: uuid()},
    {nombre: 'Después De Diciembre - Wattpad - Joana Marcus', 
    descripcion: 'Tapa dura, castellano, novela, romance', 
    precio: '$4049',
    id: uuid()},
    {nombre: 'El Pozo De La Ascensión - Mistborn 2 - Sanderson, Brandon', 
    descripcion: 'Tapa dura, castellano, novela, fantasía', 
    precio: '$5939',
    id: uuid()}
  ]);

  const agregarProducto = (producto) => {
    editarListaProductos([
      ...listaProductos,
      producto
    ])
  };

  const [carrito, agregarAlCarrito] = useState([]);

  return (
    <Fragment className="AppPrincipal">
      <Header/>
      <Container fluid>
        <Row>
          <Col xs={8} className='productos'>
            <h4>Lista de productos</h4>
            {
              listaProductos.map(producto =>
                <Producto
                  key={producto.id}
                  producto={producto}
                  listaProductos={listaProductos}
                  carrito={carrito}
                  agregarAlCarrito={agregarAlCarrito}
                />
              )
            }
            <Formulario
              agregarProducto={agregarProducto}
            />
          </Col>
          <Col>
            <Carrito
              carrito={carrito}
              agregarAlCarrito={agregarAlCarrito}
            />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default App;
