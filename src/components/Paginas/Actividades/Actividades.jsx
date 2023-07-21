import React from 'react'
import './Actividades.css';
import Carousel from 'react-bootstrap/Carousel';

const Actividades = () => {
  return (
    <div className='container'>
      <h1 className='h1Actividades'>Actividades</h1>
      <p className='sub'>Contamos con actividades de extensión cultural:</p>
      <section className='sectionActividades'>
        <article className='articlesActividades'>
          <p className='pSubtituloActividades'>Esporádicos</p>
          <div className='divContenedorItems'>
            <p>- Encuentros culturales con adoltos mayores</p>
            <p>- Workshop de cerámica</p>
            <p>- Talleres de fotografía</p>
            <p>- Talleres de robótica y programación</p>
            <p>- Talleres de belleza</p>
            <p>- Seminarios de arte y cocina</p>
            <p>- Conferencias, encuentros de lectura, teatro, animaciones de lectura, títeres</p>
            <p>- Talleres tipo colonia durante las vacaciones para niños de distintas edades</p>
          </div>
        </article>

        <article className='articlesActividades'>
          <p className='pSubtituloActividades'>Diarios</p>
          <div className='divContenedorItems'>
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
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block imCar w-100"
              src="./libros.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imCar w-100"
              src="./libros.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imCar w-100"
              src="./libros.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  )
}

export default Actividades