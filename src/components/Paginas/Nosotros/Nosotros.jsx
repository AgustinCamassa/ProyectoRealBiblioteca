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
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src="slide2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src="./slide3.png"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src="slide4.png"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </section>
      </article>

      <article className='artMedio container'>
        <div className='boxInfoN'>
          <section className='infoNosotros'>
            <div>
              <h2 className='titN2 h2Tit'>Estamos trabajando para vos</h2>
              <p>
                Nos encontramos en transformación, estamos construyendo una nueva sede para mejorar aún más nuestros servicios. Es por eso que necesitamos tu ayuda.
              </p>
              <p>
                Si queres formar parte de un gran cambio y apoyar a nuestros voluntarios desde la comodidad de tu hogar, disponemos de canales electrónicos para que puedas realizar tu aporte solidario.
              </p>
            </div>
            <div className='infoBanco'>
              <h2 className='titN2 h2Tit'>Banco Nación</h2>
              <p className='pBanco'>Cuenta N° 1341118546</p>
              <p className='pBanco'>CBU 0110134440013411185462</p>
              <p className='pBanco'>CUIT 30-68667801-2 IVA EXENTO</p>
            </div>
          </section>
        </div>
      </article>
    </div>

  )
}

export default Nosotros