import React from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='ContenedorNav'>
                <Link className={"linkBar"} to={"/"}><Navbar.Brand> <img src="./im.png" alt="" /></Navbar.Brand></Link>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto NavUl">
                            <NavLink className={"linkBar"} to={"/"}><Navbar.Brand>Biblioteca Activa</Navbar.Brand></NavLink>
                            <NavLink className={"linkBar"} to={"/paginas/nosotros"}><Navbar.Brand>Nosotros</Navbar.Brand></NavLink>
                            <NavLink className={"linkBar"} to={"/paginas/contacto"}><Navbar.Brand>Contacto</Navbar.Brand></NavLink>
                            <NavLink className={"linkBar"} to={"/paginas/asociate"}><Navbar.Brand>¡Asociate!</Navbar.Brand></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
