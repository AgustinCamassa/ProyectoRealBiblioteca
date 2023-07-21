import React from 'react'
import './Nosotros.css'
import Carousel from 'react-bootstrap/Carousel';

const Nosotros = () => {
  return (

    <div className='divContenedorN'>
      <article className='primerBloqueN'>
        <h2 className='titN h2Tit'>Conocé la Biblioteca Popular Belgrano</h2>
        <section className='spanContenedorN container'>
          <div className='col-6'>
            <span className='spanN'>
            Somos una asociación civil, una ONG cultural, sin fines de lucro. La biblioteca es propiedad y responsabilidad de sus socios.
            </span>
            <span className='spanN'>
            Podes acercarte a conocernos, leer, aprender y sumergirte en un espacio educativo con actividades para todas las edades.
            </span>
          </div>
          <div className='col-6'>
            <span className='spanN'>
            Popular, por nacer de la unión de voluntades de las personas que deciden asociarse para buscar su bien común.
            </span>
            <span className='spanN'>
              Los socios deciden hacer públicos algunos de sus espacios, talleres y materiales para el bien de la comunidad toda.
            </span>
          </div>
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
      </article>

      <article className='artMedio container'>
        <h2 className='titN2 h2Tit'>Estamos trabajando para vos</h2>
        <div className='boxInfoN container'>
          <section className='textoN col-6'>
            <span>
              Nos encontramos en transformación, estamos construyendo una nueva sede para mejorar aún más nuestros servicios. Es por eso que necesitamos tu ayuda.
            </span>
            <span>
              Si queres formar parte de un gran cambio y apoyar a nuestros voluntarios desde la comodidad de tu hogar, disponemos de canales electrónicos para que puedas realizar tu aporte solidario.
            </span>
            <button className='btnDonar'>
              <a href="">Realizar Donacion</a>
            </button>
          </section>
          <img className='imN col-6' src="im.png" alt="" />
        </div>
      </article>
    </div>

  )
}

export default Nosotros