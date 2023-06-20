import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <article>
                <section>
                    <img src="./im.png" alt="" />
                </section>

                <section>
                    <span>Ubicación</span>
                    <div><Link rel="stylesheet" href="" />Av. Santiago</div>
                </section>

                <section>
                    <ul>
                        <li><NavLink to={"/"}>Biblioteca Activa</NavLink></li>
                        <li><NavLink to={"/paginas/nosotros"}>Nosotros</NavLink></li>
                        <li><NavLink to={"/paginas/contacto"}>Contacto</NavLink></li>
                        <li><NavLink to={"/paginas/asociate"}>¡Asociate!</NavLink></li>
                    </ul>
                </section>

                <section></section>
            </article>

            <article>

            </article>
        </footer>
    )
}

export default Footer