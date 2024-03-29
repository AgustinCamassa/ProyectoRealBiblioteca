import "./Espacios.css";
import ingreso from "../../../../src/imagenes/ingreso.jpeg";
import juegoteca1 from "../../../../src/imagenes/juegoteca1.jpeg";
import juegoteca2 from "../../../../src/imagenes/juegoteca2.jpeg";
import juegoteca3 from "../../../../src/imagenes/juegoteca3.jpeg";
import sala1 from "../../../../src/imagenes/sala1.jpeg";
import patio2 from "../../../../src/imagenes/patio2.jpeg";
import patio3 from "../../../../src/imagenes/patio3.jpeg";
import estudio1 from "../../../../src/imagenes/estudio1.jpeg";
import estudio2 from "../../../../src/imagenes/estudio2.jpeg";
import CarouselMobile from "../../Carousel/CarouselMobile";
import CarouselImages from "../../Carousel/CarouselImages";

const Espacios = () => {
  const FIRST_SLIDE = [ingreso, juegoteca1, juegoteca2];
  const SECOND_SLIDE = [juegoteca3, sala1, patio2];
  const THIRD_SLIDE = [patio3, estudio1, estudio2];
  const CAROUSEL_PC = [FIRST_SLIDE, SECOND_SLIDE, THIRD_SLIDE];
  const CAROUSEL_MOBILE = [...FIRST_SLIDE, ...SECOND_SLIDE, ...THIRD_SLIDE];

  return (
    <div className="container DivGeneralEspacios">
      <h1 className="h1Espacios">Espacios</h1>
      <div className="divTextos">
        <p className="pSubtitulo espacioSubtitle">Conoce nuestra biblioteca</p>
        <div className="divContenedorItems">
          <p>
            <strong> Sala de estudio</strong> con conexión a internet y
            dispositivos digitales.
          </p>
          <p>
            {" "}
            <strong>Juegoteca</strong> para actividades recreativas y de
            aprendizaje.
          </p>
          <p>
            <strong>Sala de lectura</strong>
          </p>
          <p>
            {" "}
            <strong>Patio</strong> con juegos de plaza, arenero y casita de
            madera.
          </p>
        </div>
      </div>
      <div>
        <CarouselMobile slides={CAROUSEL_MOBILE} />
        <CarouselImages slides={CAROUSEL_PC} />
      </div>
    </div>
  );
};

export default Espacios;
