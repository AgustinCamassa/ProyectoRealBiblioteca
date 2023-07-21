import React from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body divNav">
            <Container className='ContenedorNav'>
                <Link className={"linkBar"} to={"/"}><img src="./logo.png" alt="" /></Link>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto NavUl">
                            <NavLink activeClassName="active" className={"linkBar"} to={"/"}>Biblioteca Activa</NavLink>
                            <NavLink activeClassName="active" className={"linkBar"} to={"/paginas/nosotros"}>Nosotros</NavLink>
                            <NavLink activeClassName="active" className={"linkBar"} to={"/paginas/contacto"}>Contacto</NavLink>
                            <NavLink activeClassName="active" className={"linkBar"} to={"/paginas/asociate"}>¡Asociate!</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
