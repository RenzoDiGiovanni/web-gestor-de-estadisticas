import React from 'react'
import { connect } from "react-redux";
import { Card, Col } from 'react-bootstrap';

const Tarjetas = (props) => {
    let datos = props.listaActualizada.listaJugadores;
    let datosCantidad = props.listaActualizada.listaJugadores.length;
    console.log(datosCantidad);

    let filtradoUruguay = datos.filter(function (filtradoN) {
        return filtradoN.nacionalidad === "Uruguay";
    });

    let uruguay = filtradoUruguay.length;

    let promedio = 0;
    let promedioDecimales = 0;

    const hacerPromedio = () => {
        let promedioFinal = 0;
        for (let i = 0; i < datosCantidad; i++) {
            promedioFinal = promedioFinal + props.listaActualizada.listaJugadores[i].edad;
        }
        promedio = promedioFinal / datosCantidad;
        promedioDecimales = promedio.toFixed(2);
    }

    hacerPromedio();

    return (
        <>
            <Col md={2} className="filtros"></Col>
            <Col md={10} className="datosTarjeta">
                <Card style={{ width: '14rem', float: 'left' }}>
                    <Card.Body>
                        <Card.Title>Jugadores ingresados</Card.Title>
                        <Card.Text>{datosCantidad}</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', float: 'left' }}>
                    <Card.Body>
                        <Card.Title>Jugadores uruguayos</Card.Title>
                        <Card.Text>{uruguay}</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem', float: 'left' }}>
                    <Card.Body>
                        <Card.Title>Edad promedio</Card.Title>
                        <Card.Text>
                            {promedioDecimales}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Tarjetas);
