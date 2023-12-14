import "./Actividades.css";
import Carousel from "react-bootstrap/Carousel";
import actividades1 from "../../../../src/imagenes/actividades1.jpeg";
import actividades2 from "../../../../src/imagenes/actividades2.jpeg";
import actividades3 from "../../../../src/imagenes/actividades3.jpeg";
import actividades4 from "../../../../src/imagenes/actividades4.jpeg";
import actividades5 from "../../../../src/imagenes/actividades5.jpeg";
import actividades6 from "../../../../src/imagenes/actividades6.jpeg";

const FIRST_SLIDE = [actividades1, actividades2, actividades3];

const SECOND_SLIDE = [actividades4, actividades5, actividades6];

const CAROUSEL_MOBILE = [...FIRST_SLIDE, ...SECOND_SLIDE];

const Actividades = () => {
  return (
    <div className="container">
      <h1 className="h1Actividades">Actividades</h1>
      <p className="sub">Contamos con actividades de extensión cultural:</p>
      <section className="sectionActividades">
        <article className="articlesActividades">
          <p className="pSubtituloActividades">Esporádicos</p>
          <div className="divContenedorItems">
            <p>- Encuentros culturales con adoltos mayores</p>
            <p>- Workshop de cerámica</p>
            <p>- Talleres de fotografía</p>
            <p>- Talleres de robótica y programación</p>
            <p>- Talleres de belleza</p>
            <p>- Seminarios de arte y cocina</p>
            <p>
              - Conferencias, encuentros de lectura, teatro, animaciones de
              lectura, títeres
            </p>
            <p>
              - Talleres tipo colonia durante las vacaciones para niños de
              distintas edades
            </p>
          </div>
        </article>

        <article className="articlesActividades">
          <p className="pSubtituloActividades">Diarios</p>
          <div className="divContenedorItems">
            <p>- Taller de apoyo escolar nivel primario y secundario</p>
            <p>- Taller de arte, juego y lectura para niños</p>
            <p>Taller maternal de arte, juego y conversatorio</p>
            <p>- Taller de inglés</p>
            <p>- Taller de cocina para niños</p>
            <p>- Club de lectura para adolescentes</p>
          </div>
        </article>
      </section>
      <section>
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
        </Carousel>
      </section>
    </div>
  );
};

export default Actividades;
