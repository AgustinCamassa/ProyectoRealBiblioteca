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
                    <span>Ubicación de la Bilioteca</span>
                    <div><Link rel="stylesheet" href="" />Av. Santiago del Estero, 425</div>
                </section>

                <section className='s3P1 col-lg-2'>
                    <div><Link className='linkExterno' to={"/"}>Biblioteca Activa</Link></div>
                    <div><Link className='linkExterno' to={"/paginas/nosotros"}>Nosotros</Link></div>
                    <div><Link className='linkExterno' to={"/paginas/contacto"}>Contacto</Link></div>
                    <div><Link className='linkExterno' to={"/paginas/asociate"}>¡Asociate!</Link></div>
                </section>

                <section className='s4P1 col-lg-2'>
                    <div><Link rel="stylesheet" href="" />Facebook</div>
                    <div><Link rel="stylesheet" href="" />Twitter</div>
                    <div><Link rel="stylesheet" href="" />Instagram</div>
                </section>

                <section className='s5P1 col-lg-2'>
                    <button className='botonSubir'><Link to={"/"}>/0/</Link></button>
                </section>

            </article>

            <article className='parte2Footer row'>

                <section className='s1P2 col-lg-8'>
                    <p>12345678910</p>
                    <p>libreria@gmial.com</p>
                </section>

                <section className='s2P2 col-lg-4'>
                    <button className='botonPriv'><Link className='linkPriv' to={"/"}>Terminos</Link></button>
                    <button className='botonPriv'><Link className='linkPriv' to={"/"}>Privacidad</Link></button>
                    <button className='botonPriv'><Link className='linkPriv' to={"/"}>Cookies</Link></button>
                </section>

            </article>

        </footer>
    )
}