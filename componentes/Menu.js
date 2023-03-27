import React from 'react'
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Nav className="flex-column">
            <Nav.Item>
                <NavLink activeClassName="activo" exact to="/inicio">Inicio</NavLink><hr />
            </Nav.Item>
            <Nav.Item>
                <NavLink activeClassName="activo" to="/ingresar">Ingresar jugador</NavLink><hr />
            </Nav.Item>
            <Nav.Item>
                <NavLink activeClassName="activo" to="/jugadores">Lista de jugadores</NavLink><hr className="ultLinea" />
            </Nav.Item>
            <Nav.Item>
                <NavLink className="cerrarSesion" exact to="/">Cerrar Sesión</NavLink>
            </Nav.Item>
        </Nav>
    )
}

export default Menu
