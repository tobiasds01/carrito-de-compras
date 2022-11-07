import React, { Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer.css';

import telefono from '../imagenes/telefono.png';
import correo from '../imagenes/correo.png';
import ubicacion from '../imagenes/ubicacion.png';
import facebook from '../imagenes/facebook.png';
import instagram from '../imagenes/instagram.png';

const Footer = () => {
    return ( 
        <Fragment>
            <Container fluid className="footer">
                <Row>
                    <Col>
                        <h3>Información de contacto</h3>
                        <img src={telefono} alt="" className="footer-img"></img><p className="footer-p">1120400901</p>
                        <img src={correo} alt="" className="footer-img"/><p className="footer-p">consultas@librenta.com</p>
                        <img src={ubicacion} alt="" className="footer-img"/><p className="footer-p">Buenos Aires, Argentina</p>
                    </Col>
                    <Col>
                        <h3>Redes sociales</h3>
                        <a href="https://www.facebook.com/Librenta" target="_blank">
                            <img src={facebook} alt="" className="footer-img"/>
                        </a>
                        <a href="https://www.instagram.com/librenta/" target="_blank">
                            <img src={instagram} alt="" className="footer-img"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Fragment>
     );
}
 
export default Footer;