import "./Nosotros.css";
import Carousel from "react-bootstrap/Carousel";
import nosotros1 from "../../../../src/imagenes/nosotros1.webp";
import nosotros2 from "../../../../src/imagenes/nosotros2.webp";
import nosotros3 from "../../../../src/imagenes/nosotros3.webp";
import nosotros4 from "../../../../src/imagenes/nosotros4.webp";
import nosotros5 from "../../../../src/imagenes/nosotros5.webp";
import nosotros6 from "../../../../src/imagenes/nosotros6.webp";
import nosotros7 from "../../../../src/imagenes/nosotros7.webp";
import nosotros8 from "../../../../src/imagenes/nosotros8.webp";
import nosotros9 from "../../../../src/imagenes/nosotros9.webp";

const FIRST_SLIDE = [nosotros1, nosotros2, nosotros3];
const SECOND_SLIDE = [nosotros4, nosotros5, nosotros6];
const THIRD_SLIDE = [nosotros7, nosotros8, nosotros9];

const CAROUSEL_MOBILE = [...FIRST_SLIDE, ...SECOND_SLIDE, ...THIRD_SLIDE];

const Nosotros = () => {
  return (
    <div className="divContenedorN">
      <article className="primerBloqueN">
        <h1 className="titN h2Tit">
          Conocé la Biblioteca Popular Belgrano N°2252
        </h1>
        <section className="spanContenedorN container">
          <div className="col-6 divSpan">
            <span className="spanN">
              Somos una asociación civil, una ONG cultural, sin fines de lucro.
              La biblioteca es propiedad y responsabilidad de sus socios.
            </span>
            <span className="spanN">
              Podes acercarte a conocernos, leer, aprender y sumergirte en un
              espacio educativo con actividades para todas las edades.
            </span>
          </div>
          <div className="col-6 divSpan">
            <span className="spanN">
              Popular, por nacer de la unión de voluntades de las personas que
              deciden asociarse para buscar su bien común.
            </span>
            <span className="spanN">
              Los socios deciden hacer públicos algunos de sus espacios,
              talleres y materiales para el bien de la comunidad toda.
            </span>
          </div>
        </section>

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
      </article>

      <article className="artMedio container">
        <div className="boxInfoN">
          <section className="infoNosotros">
            <div>
              <h2 className="titN2 h2Tit">Estamos trabajando para vos</h2>
              <p>
                Nos encontramos en transformación, estamos construyendo una
                nueva sede para mejorar aún más nuestros servicios. Es por eso
                que necesitamos tu ayuda.
              </p>
              <p>
                Si queres formar parte de un gran cambio y apoyar a nuestros
                voluntarios desde la comodidad de tu hogar, disponemos de
                canales electrónicos para que puedas realizar tu aporte
                solidario.
              </p>
            </div>
            <div className="infoBanco">
              <h2 className="titN2 h2Tit">Banco Nación</h2>
              <p className="pBanco">Cuenta N° 1341118546</p>
              <p className="pBanco">CBU 0110134440013411185462</p>
              <p className="pBanco">CUIT 30-68667801-2 IVA EXENTO</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Nosotros;
