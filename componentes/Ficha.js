import React from 'react'
import { connect } from "react-redux";
import { Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2'

const Ficha = (props) => {

    let datos = props.listaActualizada.listaJugadores;

    let filtradoSub23 = datos.filter(function (filtradoF) {
        return filtradoF.tipo === "Sub-23";
    });
    let filtradoSub25 = datos.filter(function (filtradoF) {
        return filtradoF.tipo === "Sub-25";
    });
    let filtradoMayor = datos.filter(function (filtradoF) {
        return filtradoF.tipo === "Mayor";
    });
    let filtradoExtranjero = datos.filter(function (filtradoF) {
        return filtradoF.tipo === "Extranjero";
    });

    let sub23 = filtradoSub23.length;
    let sub25 = filtradoSub25.length;
    let mayor = filtradoMayor.length;
    let extranjero = filtradoExtranjero.length;

    const data = {
        labels: ['Sub-23', 'Sub-25', 'Mayores', 'Extranjeros'],
        datasets: [
            {
                label: '# of Votes',
                data: [sub23, sub25, mayor, extranjero],
                backgroundColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 143, 255, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(150, 150, 150, 1)',
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 143, 255, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(150, 150, 150, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <>
            <Col md={2} className="filtros"></Col>
            <Col md={5} className="datosFicha">
                <Doughnut data={data} />
            </Col>
        </>

    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Ficha);

