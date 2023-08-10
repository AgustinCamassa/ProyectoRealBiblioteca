import React from "react";
import "./BibliotecaActiva.css";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import libros from "../../../../public/imagenes/libros.png";
import espacios from "../../../../public/imagenes/icono espacios.svg";
import servicios from "../../../../public/imagenes/icono servicios.svg";
import actividades from "../../../../public/imagenes/icono actividades.svg";
import right from "../../../../public/imagenes/arrow-circle-right.svg";
import Cards from "./Cards/Cards";

const BibliotecaActiva = () => {
  const CARDS_INFO = [
    {
      title: "Espacios",
      img: espacios,
      text: "Contamos espacios para que todas las personas que asistan se sientan cómodas, según lo que deseen hacer. Conocé nuestras salas de estudio, lectura, juegoteca y patio para jugar o distraerse.",
      link: right,
    },
    {
      title: "Servicios",
      img: servicios,
      text: "Descubrí nuestros dos tipos de servicios, el de socios, para poder retirar libros, acceder a descuentos en talleres y mantenerse al tanto de novedades, y el de biblioteca pública, para acceder a libros en nuestras salas de lectura.",
      link: right,
    },
    {
      title: "Actividades",
      img: actividades,
      text: "Conocé acá nuestras actividades diarias exporádicas. Contamos con diversos talleres, clubes de lectura, encuentros culturales, seminarios, conferencias, animaciones de lectura, títeres, etc.",
      link: right,
    },
  ];

  return (
    <div className="divContenedor container">
      <article className="Bloque row">
        <section className="textoB1 col-lg-6">
          <h1 className="h1Home">Más de 11.000 libros disponibles</h1>
          <span>
            En Biblioteca Popular Belgrano, contamos con más de 11.000 volúmenes
            para todas las edades, gustos y necesidades, incluyendo una
            biblioteca especial para niños.
          </span>
        </section>

        <section className="col-lg-6">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src={libros}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src={libros}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src={libros}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </section>
      </article>

      <section className="contenedorTarjetas">
        {CARDS_INFO.map((card) => {
          return (
            <Cards
              srcImg={card.img}
              title={card.title}
              text={card.text}
              srcLink={card.link}
              key={card.title}
            />
          );
        })}
      </section>
    </div>
  );
};

export default BibliotecaActiva;
