import React, { useRef } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Form } from 'react-bootstrap';

const Registro = () => {

    let history = useHistory();

    const usuarioRef = useRef(null)
    const contraseñaRef = useRef(null)

    let registrarUsuario = e => {

        let usuario = usuarioRef.current.value;
        let contraseña = contraseñaRef.current.value;

        fetch(`https://aguadaapp.herokuapp.com/registrar?usuario=${usuario}&contrasenia=${contraseña}`)
            .then(r => r.json())
            .then(usuarioNuevo => {
                history.push("/");
            })
    }

    return (
        <Container>
            <Row>
                <Col md={12} className="login">
                    <Form className="formLogin">
                        <Form.Group controlId="formBasicUsuario">
                            <Form.Control ref={usuarioRef} placeholder="Usuario" className="inputLogin" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control ref={contraseñaRef} type="password" placeholder="Contraseña" className="inputLogin" />
                        </Form.Group>
                        <input type="button" value="Registrarse" onClick={registrarUsuario} className="botonLogin" />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    listaActualizadaUsuarios: state
})

export default connect(mapStateToProps)(Registro);

