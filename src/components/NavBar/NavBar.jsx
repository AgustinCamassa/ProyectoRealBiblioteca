import React from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <header>
            <nav>
                <Link to={"/"}>
                    <img src="./im.png" alt="" />
                </Link>
                <ul>
                    <li><NavLink to={"/"}>Biblioteca Activa</NavLink></li>
                    <li><NavLink to={"/paginas/nosotros"}>Nosotros</NavLink></li>
                    <li><NavLink to={"/paginas/contacto"}>Contacto</NavLink></li>
                    <li><NavLink to={"/paginas/asociate"}>¡Asociate!</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
