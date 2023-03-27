import React, { useEffect, useRef } from 'react'
import { connect } from "react-redux";
import { Table } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';

const Jugadores = props => {
    const equipoRef = useRef(null)

    let datos = props.listaActualizada.listaJugadores;
    console.log(datos);

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

    let eliminarJugadores = e => {
        const idBorrar = e.target.id;
        console.log(idBorrar);

        fetch(`https://aguadaapp.herokuapp.com/id?id=${idBorrar}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(r => filtrarJugadores())
    }


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
                    <Col md={2} className="filtros"></Col>
                    <Col md={10} className="listaJugadores">
                        <select className="selectEquipos" ref={equipoRef} onChange={filtrarJugadores}>
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
                        <Table striped bordered hover><thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Posición</th><th>Equipo</th><th>Ficha</th><th>Nacionalidad</th><th className="acciones">Acciones</th></tr></thead>
                            {datos.map(elem => <tbody key={elem._id}><tr><td>{elem.nombre}</td><td>{elem.apellido}</td><td>{elem.edad}</td><td>{elem.posicion}</td><td>{elem.equipo}</td><td>{elem.tipo}</td><td>{elem.nacionalidad}</td><td><input type="button" onClick={eliminarJugadores} id={elem._id} value="X" className="eliminar" /></td></tr></tbody>)}
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Jugadores);