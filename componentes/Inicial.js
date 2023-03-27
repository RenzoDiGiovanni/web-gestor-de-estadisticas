import React, { useEffect, useRef } from 'react'
import { connect } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import Tarjetas from './Tarjetas';
import Extranjeros from './Extranjeros';
import Posiciones from './Posiciones';
import Ficha from './Ficha';
import Edad from './Edad';
import UltIngresados from './UltIngresados';
import Menu from './Menu';

const Inicial = (props) => {

    const equipoRef = useRef(null)

    let mostrarJugadores = e => {
        fetch('https://aguadaapp.herokuapp.com/jugadores')
            .then(r => r.json())
            .then(jugadores => {
                props.dispatch({ type: "MOSTRAR_JUGADORES", payload: jugadores.listaJugadores })
            })
    }

    useEffect(() => {
        mostrarJugadores();
    }, [])

    let filtrarJugadores = e => {
        let equipoF = equipoRef.current.value;

        fetch(`https://aguadaapp.herokuapp.com/filtroEquipo?equipo=${equipoF}`)
            .then(r => r.json())
            .then(jugadores => {
                props.dispatch({ type: "MOSTRAR_JUGADORES", payload: jugadores.listaJugadores })
                if (equipoF === "Todos") {
                    mostrarJugadores();
                }
            })
    }

    return (
        <>
            <Menu />
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={10} className="filtroEquipoInicio">
                        <label className="filtroEquipo">Filtrar por equipo:</label>
                        <select className="selectEquiposInicio" ref={equipoRef} onChange={filtrarJugadores}>
                            <option value="Todos">Todos</option>
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
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Tarjetas></Tarjetas>
                </Row>
                <Row>
                    <Extranjeros></Extranjeros>
                    <Posiciones></Posiciones>
                </Row>
                <Row>
                    <UltIngresados></UltIngresados>
                </Row>
                <Row>
                    <Ficha></Ficha>
                    <Edad></Edad>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Inicial);