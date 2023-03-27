import React, { useRef } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Form } from 'react-bootstrap';

const Login = (props) => {

    //let datos = props.listaActualizadaUsuarios.listaUsuarios;
    //console.log(datos.length);

    const usuarioRef = useRef(null)
    const contraseñaRef = useRef(null)

    let history = useHistory();

    let obtenerUsuarios = e => {

        let usuario = usuarioRef.current.value;
        let contraseña = contraseñaRef.current.value;

        fetch(`https://aguadaapp.herokuapp.com/usuarios?usuario=${usuario}&contrasenia=${contraseña}`)
            .then(r => r.json())
            .then(usuarios => {
                for (let i = 0; i < usuarios.listaUsuarios.length; i++) {
                    if (usuario === usuarios.listaUsuarios[i].usuario && contraseña === usuarios.listaUsuarios[i].contrasenia) {
                        history.push("/inicio");
                    }
                }
            })
    }

    let cambiarPagina = e => {
        history.push("/registrarse");
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
                        <input type="button" value="Iniciar Sesión" className="botonLogin" onClick={obtenerUsuarios}/><br></br>
                        <input type="button" value="Registrarse" className="botonLogin" onClick={cambiarPagina} />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    listaActualizadaUsuarios: state
})

export default connect(mapStateToProps)(Login);
