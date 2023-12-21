import "./Actividades.css";
import actividades1 from "../../../../src/imagenes/actividades1.jpeg";
import actividades2 from "../../../../src/imagenes/actividades2.jpeg";
import actividades3 from "../../../../src/imagenes/actividades3.jpeg";
import actividades4 from "../../../../src/imagenes/actividades4.jpeg";
import actividades5 from "../../../../src/imagenes/actividades5.jpeg";
import actividades6 from "../../../../src/imagenes/actividades6.jpeg";
import CarouselMobile from "../../Carousel/CarouselMobile";
import CarouselImages from "../../Carousel/CarouselImages";

const Actividades = () => {
  const FIRST_SLIDE = [actividades1, actividades2, actividades3];
  const SECOND_SLIDE = [actividades4, actividades5, actividades6];
  const CAROUSEL_PC = [FIRST_SLIDE, SECOND_SLIDE];
  const CAROUSEL_MOBILE = [...FIRST_SLIDE, ...SECOND_SLIDE];
  return (
    <div className="container">
      <h1 className="h1Actividades">Actividades</h1>
      <div className="divSubtitle">
        <p className="sub actividadesSubtitle">
          Participá de nuestras actividades diarias o esporádicas
        </p>
      </div>
      <section className="sectionActividades">
        <article className="articlesActividades">
          <p className="pSubtituloActividades">
            {" "}
            <strong>Esporádicos</strong>
          </p>
          <div className="divContenedorItems">
            <p>- Encuentros culturales con adultos mayores</p>
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
          <p className="pSubtituloActividades">
            {" "}
            <strong>Diarios</strong>
          </p>
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
        <CarouselMobile slides={CAROUSEL_MOBILE} />
        <CarouselImages slides={CAROUSEL_PC} />
      </section>
    </div>
  );
};

export default Actividades;
