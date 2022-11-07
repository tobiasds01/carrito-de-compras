import React, { Fragment } from 'react';
import logo from '../imagenes/logo-librenta.png';
import '../Header.css';
import { Container } from 'react-bootstrap';

const Header = () => {
    return ( 
        <Fragment>
            <Container fluid className='header'>
                <img src={logo} alt="Logo librenta" className='header-img'/>
            </Container> 
        </Fragment>
     );
}
 
export default Header;