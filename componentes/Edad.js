import React from 'react'
import { connect } from "react-redux";
import { Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2'

const Edad = (props) => {

    let datos = props.listaActualizada.listaJugadores;

    let filtradoEdad1 = datos.filter(function (filtradoE) {
        return filtradoE.edad > 35;
    });
    let filtradoEdad2 = datos.filter(function (filtradoE) {
        return filtradoE.edad >= 30;
    });
    let filtradoEdad3 = datos.filter(function (filtradoE) {
        return filtradoE.edad >= 25;
    });
    let filtradoEdad4 = datos.filter(function (filtradoE) {
        return filtradoE.edad >= 20;
    });
    let filtradoEdad5 = datos.filter(function (filtradoE) {
        return filtradoE.edad < 20;
    });

    let edad1 = filtradoEdad1.length;
    let edad2 = filtradoEdad2.length - edad1;
    let edad3 = filtradoEdad3.length - edad2 - edad1;
    let edad4 = filtradoEdad4.length - edad3 - edad2 - edad1;
    let edad5 = filtradoEdad5.length;

    console.log(edad4);

    const data = {
        labels: ['1-19', '20-24', '25-29', '30-35', '+35'],
        datasets: [
            {
                label: 'Edades',
                data: [edad5, edad4, edad3, edad2, edad1],
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
        <>
            <Col md={5} className="datosEdad">
                <Bar data={data} options={options} />
            </Col>
        </>
    )
}

const mapStateToProps = (state) => ({
    listaActualizada: state
})

export default connect(mapStateToProps)(Edad);
