import "./Espacios.css";

import Carousel from "react-bootstrap/Carousel";

const Espacios = () => {
  const FIRST_SLIDE = [
    "../../../../src/imagenes/ingreso.jpeg",
    "../../../../src/imagenes/juegoteca-1.jpeg",
    "../../../../src/imagenes/juegoteca-2.jpeg",
  ];

  const SECOND_SLIDE = [
    "../../../../src/imagenes/juegoteca-3.jpeg",
    "../../../../src/imagenes/patio-1.jpeg",
    "../../../../src/imagenes/patio-2.jpeg",
  ];

  const THIRD_SLIDE = [
    "../../../../src/imagenes/patio-3.jpeg",
    "../../../../src/imagenes/estudio-1.jpeg",
    "../../../../src/imagenes/estudio-2.jpeg",
  ];

  const CAROUSEL_MOBILE = [...FIRST_SLIDE, ...SECOND_SLIDE, ...THIRD_SLIDE];

  return (
    <div className="container DivGeneralEspacios">
      <h1 className="h1Espacios">Espacios</h1>
      <div className="divTextos">
        <p className="pSubtitulo">
          Actualmente nuestras actividades para el desarrollo comunitario se
          realizan en:
        </p>
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
