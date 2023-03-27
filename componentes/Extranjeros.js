import React from 'react'
import { connect } from "react-redux";
import { Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2'

const Extranjeros = (props) => {
    let datos = props.listaActualizada.listaJugadores;

    let filtradoPanama = datos.filter(function (filtradoN) {
        return filtradoN.nacionalidad === "Panamá";
    });
    let filtradoEstadosUnidos = datos.filter(function (filtradoN) {
        return filtradoN.nacionalidad === "Estados Unidos";
    });
    let filtradoArgentina = datos.filter(function (filtradoN) {
        return filtradoN.nacionalidad === "Argentina";
    });
    let filtradoOtros = datos.filter(function (filtradoN) {
        return filtradoN.nacionalidad === "Otros";
    });

    let panama = filtradoPanama.length;
    let estadosUnidos = filtradoEstadosUnidos.length;
    let argentina = filtradoArgentina.length;
    let otros = filtradoOtros.length;

    const data = {
        labels: ['Estados Unidos', 'Argentina', 'Panamá', 'Otros'],
        datasets: [
            {
                label: 'Extranjeros',
                data: [estadosUnidos, argentina, panama, otros],
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
        <>
            <Col md={2} className="filtros"></Col>
            <Col md={5} className="filtros">
                <Bar data={data} options={options} />
            </Col>
        </>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Extranjeros);
