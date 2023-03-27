import React from 'react'
import { connect } from "react-redux";
import { Col } from 'react-bootstrap';
import { HorizontalBar } from 'react-chartjs-2'

const Posiciones = (props) => {

    let datos = props.listaActualizada.listaJugadores;

    let filtradoBase = datos.filter(function (filtradoP) {
        return filtradoP.posicion === "Base";
    });
    let filtradoEscolta = datos.filter(function (filtradoP) {
        return filtradoP.posicion === "Escolta";
    });
    let filtradoAlero = datos.filter(function (filtradoP) {
        return filtradoP.posicion === "Alero";
    });
    let filtradoAlaPivot = datos.filter(function (filtradoP) {
        return filtradoP.posicion === "Ala Pívot";
    });
    let filtradoPivot = datos.filter(function (filtradoP) {
        return filtradoP.posicion === "Pívot";
    });

    let base = filtradoBase.length;
    let escolta = filtradoEscolta.length;
    let alero = filtradoAlero.length;
    let alaPivot = filtradoAlaPivot.length;
    let pivot = filtradoPivot.length;

    const data = {
        labels: ['Bases', 'Escoltas', 'Aleros', 'Ala Pívots', 'Pívots'],
        datasets: [
            {
                label: 'Posiciones',
                data: [base, escolta, alero, alaPivot, pivot],
                backgroundColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 143, 255, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(150, 150, 150, 1)',
                    'rgba(255, 130, 0, 1)',
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 143, 255, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(150, 150, 150, 1)',
                    'rgba(255, 130, 0, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return (
        <Col md={5} className="filtros">
            <HorizontalBar data={data} options={options} />
        </Col>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Posiciones);
