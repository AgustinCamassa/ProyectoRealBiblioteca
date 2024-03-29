import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../src/imagenes/logo.png";
import volver from "../../../src/imagenes/volver.svg";

export default function Footer() {
  return (
    <footer className="contenedorFooter container">
      <article className="parte1Footer row">
        <section className="s1P1 col-lg-3">
          <img src={logo} alt="logo" />
        </section>

        <section className="s2P1 col-lg-3">
          <span>Ubicación de la Biblioteca</span>
          <div>
            <Link rel="stylesheet" href="" />
            Mitre S/n, Bandera - Santiago del Estero
          </div>
        </section>

        <section className="s3P1 col-lg-2">
          <div>
            <Link className="linkExterno" to={"/"}>
              Biblioteca Activa
            </Link>
          </div>
          <div>
            <Link className="linkExterno" to={"/paginas/nosotros"}>
              Nosotros
            </Link>
          </div>
          <div>
            <Link className="linkExterno" to={"/paginas/contacto"}>
              Contacto
            </Link>
          </div>
          <div>
            <Link className="linkExterno" to={"/paginas/asociate"}>
              ¡Asociate!
            </Link>
          </div>
        </section>

        <section className="s4P1 col-lg-2">
          <div>
            <a
              className="linkRedes"
              href="https://www.facebook.com/biblioteca.bandera/?locale=es_LA"
              target="_blank"
            >
              Facebook
            </a>
          </div>
          <div>
            <a
              className="linkRedes"
              href="https://www.instagram.com/bibliotecabelgrano/?hl=es"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </section>

        <section className="s5P1 col-lg-2">
          <Link to="/">
            <img className="imgFlecha" src={volver} alt="" />
          </Link>
        </section>
      </article>

      <article className="parte2Footer row">
        <section className="s1P2">
          <p>Contacto:</p>
          <p>bpbelgranobandera@gmail.com</p>
        </section>
      </article>
    </footer>
  );
}
