import React, { useRef } from 'react'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { Container, Row, Col, Form } from 'react-bootstrap';
import Menu from './Menu';

const Ingresar = (props) => {
    const nombreRef = useRef(null)
    const apellidoRef = useRef(null)
    const edadRef = useRef(null)
    const nacionalidadRef = useRef(null)
    const equipoRef = useRef(null)
    const posicionRef = useRef(null)
    const tipoRef = useRef(null)

    let history = useHistory();

    let agregarJugadores = e => {

        let nombreJ = nombreRef.current.value;
        let apellidoJ = apellidoRef.current.value;
        let edadJ = edadRef.current.value;
        let nacionalidadJ = nacionalidadRef.current.value;
        let equipoJ = equipoRef.current.value;
        let posicionJ = posicionRef.current.value;
        let tipoJ = tipoRef.current.value;

        fetch(`https://aguadaapp.herokuapp.com/insertar?nombre=${nombreJ}&apellido=${apellidoJ}&edad=${edadJ}&nacionalidad=${nacionalidadJ}&equipo=${equipoJ}&posicion=${posicionJ}&tipo=${tipoJ}`)
            .then(r => r.json())
            .then(jugadores => {

            })
        history.push("/inicio");
    }

    return (
        <>
            <Menu />
            <Container>
                <Row>
                    <Col md={2} className="filtros"></Col>
                    <Col md={10} className="formIngresar">

                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control required placeholder="Nombre" ref={nombreRef} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridApellido">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control placeholder="Apellido" ref={apellidoRef} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEdad">
                                    <Form.Label>Edad</Form.Label>
                                    <Form.Control placeholder="Edad" ref={edadRef} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridNacionalidad">
                                    <Form.Label>Nacionalidad</Form.Label>
                                    <Form.Control as="select" ref={nacionalidadRef}>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Estados Unidos">Estados Unidos</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Panamá">Panamá</option>
                                        <option value="Otros">Otros</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEquipo">
                                    <Form.Label>Equipo</Form.Label>
                                    <Form.Control as="select" ref={equipoRef}>
                                        <option value="Aguada">Aguada</option>
                                        <option value="Atenas">Atenas</option>
                                        <option value="Biguá">Biguá</option>
                                        <option value="Capitol">Capitol</option>
                                        <option value="Defensor Sporting">Defensor Sporting</option>
                                        <option value="Goes">Goes</option>
                                        <option value="Hebraica">Hebraica</option>
                                        <option value="Malvín">Malvín</option>
                                        <option value="Nacional">Nacional</option>
                                        <option value="Olimpia">Olimpia</option>
                                        <option value="Sayago">Sayago</option>
                                        <option value="Trouville">Trouville</option>
                                        <option value="Urunday">Urunday</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPosicion">
                                    <Form.Label>Posición</Form.Label>
                                    <Form.Control as="select" ref={posicionRef}>
                                        <option value="Base">Base</option>
                                        <option value="Escolta">Escolta</option>
                                        <option value="Alero">Alero</option>
                                        <option value="Ala Pívot">Ala Pívot</option>
                                        <option value="Pívot">Pívot</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTipo">
                                    <Form.Label>Ficha</Form.Label>
                                    <Form.Control as="select" ref={tipoRef}>
                                        <option value="Sub-23">Sub-23</option>
                                        <option value="Sub-25">Sub-25</option>
                                        <option value="Mayor">Mayor</option>
                                        <option value="Extranjero">Extranjero</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <input type="submit" value="Ingresar jugador" className="botonRegistro" onClick={agregarJugadores} />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Ingresar);
