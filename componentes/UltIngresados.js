import React from 'react'
import { connect } from "react-redux";
import { Col, Table } from 'react-bootstrap';


const UltIngresados = (props) => {

    let datos = props.listaActualizada.listaJugadores.slice(-3).reverse();

    return (
        <>
            <Col md={2} className="filtros"></Col>
            <Col md={10} className="ultimosIngresados">
                <h2 className="titIngresados">Últimos ingresados</h2>
                <Table striped bordered hover><thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Posición</th><th>Equipo</th><th>Ficha</th><th>Nacionalidad</th></tr></thead>
                    {datos.map(elem => <tbody key={elem._id}><tr><td>{elem.nombre}</td><td>{elem.apellido}</td><td>{elem.edad}</td><td>{elem.posicion}</td><td>{elem.equipo}</td><td>{elem.tipo}</td><td>{elem.nacionalidad}</td></tr></tbody>)}
                </Table>
            </Col>
        </>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(UltIngresados);
