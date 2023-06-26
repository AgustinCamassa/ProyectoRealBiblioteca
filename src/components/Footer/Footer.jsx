import React from 'react'
import "./Footer.css"
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {

    return (
        <footer className='contenedorFooter container'>
            <article className='parte1Footer row'>

                <section className='s1P1 col-lg-3'>
                    <img src="./im.png" alt="" />
                </section>

                <section className='s2P1 col-lg-3'>
                    <span>Ubicación</span>
                    <div><Link rel="stylesheet" href="" />Av. Santiago</div>
                </section>

                <section className='s3P1 col-lg-2'>
                    <div><Link to={"/"}>Biblioteca Activa</Link></div>
                    <div><Link to={"/paginas/nosotros"}>Nosotros</Link></div>
                    <div><Link to={"/paginas/contacto"}>Contacto</Link></div>
                    <div><Link to={"/paginas/asociate"}>¡Asociate!</Link></div>
                </section>

                <section className='s4P1 col-lg-2'>
                    <div><Link rel="stylesheet" href="" />Facebook</div>
                    <div><Link rel="stylesheet" href="" />Twitter</div>
                    <div><Link rel="stylesheet" href="" />Instagram</div>
                </section>

                <section className='s5P1 col-lg-2'>
                    <button><Link to={"/"}>Biblioteca Activa</Link></button>
                </section>

            </article>

            <article className='parte2Footer row'>

                <section className='s1P2 col-lg-8'>
                    <h3>12345678910</h3>
                    <h3>libreria@gmial.com</h3>
                </section>

                <section className='s2P2 col-lg-4'>
                    <button><Link to={"/"}>Terminos</Link></button>
                    <button><Link to={"/"}>Privacidad</Link></button>
                    <button><Link to={"/"}>Cookies</Link></button>
                </section>

            </article>

        </footer>
    )
}