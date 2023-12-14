import "./Espacios.css";
import Carousel from "react-bootstrap/Carousel";
import ingreso from "../../../../src/imagenes/ingreso.jpeg";
import juegoteca1 from "../../../../src/imagenes/juegoteca1.jpeg";
import juegoteca2 from "../../../../src/imagenes/juegoteca2.jpeg";
import juegoteca3 from "../../../../src/imagenes/juegoteca3.jpeg";
import patio1 from "../../../../src/imagenes/patio1.jpeg";
import patio2 from "../../../../src/imagenes/patio2.jpeg";
import patio3 from "../../../../src/imagenes/patio3.jpeg";
import estudio1 from "../../../../src/imagenes/estudio1.jpeg";
import estudio2 from "../../../../src/imagenes/estudio2.jpeg";

const Espacios = () => {
  const FIRST_SLIDE = [ingreso, juegoteca1, juegoteca2];

  const SECOND_SLIDE = [juegoteca3, patio1, patio2];

  const THIRD_SLIDE = [patio3, estudio1, estudio2];

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
        <Carousel data-bs-theme="dark" className="carouselShorterDevices">
          {CAROUSEL_MOBILE.map((image, index) => (
            <Carousel.Item interval={3000} key={index}>
              <div className="d-flex gap-2">
                <img
                  key={index}
                  src={image}
                  className="d-block imCar w-100 img-fluid"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <Carousel data-bs-theme="dark" className="carouselLongerDevices">
          <Carousel.Item interval={3000}>
            <div className="d-flex gap-2">
              {FIRST_SLIDE.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="d-block imCar w-100  img-fluid"
                />
              ))}
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <div className="d-flex gap-2">
              {SECOND_SLIDE.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="d-block imCar w-100  img-fluid"
                />
              ))}
            </div>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <div className="d-flex gap-2">
              {THIRD_SLIDE.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="d-block imCar w-100  img-fluid"
                />
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Espacios;
