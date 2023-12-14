import "./BibliotecaActiva.css";
import espacios from "../../../../src/imagenes/icono espacios.svg";
import servicios from "../../../../src/imagenes/icono servicios.svg";
import actividades from "../../../../src/imagenes/icono actividades.svg";
import right from "../../../../src/imagenes/arrow-circle-right.svg";
import Cards from "./Cards/Cards";
import inicio from "../../../../src/imagenes/inicio.jpeg";

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
      <article className="Bloque row articleInicio">
        <section className="textoB1 col-lg-6">
          <h1 className="h1Home">Más de 11.000 libros disponibles</h1>
          <span>
            En Biblioteca Popular Belgrano, contamos con más de 11.000 volúmenes
            para todas las edades, gustos y necesidades, incluyendo una
            biblioteca especial para niños.
          </span>
        </section>

        <section className="col-lg-6 imgSection">
          <img src={inicio} alt="inicioimg" className="inicioImg" />
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
