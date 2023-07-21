import React from 'react'
import './Espacios.css';

import Carousel from 'react-bootstrap/Carousel';

const Espacios = () => {
  return (
    <div className='container DivGeneralEspacios'>
      <h1 className='h1Espacios'>Espacios</h1>
      <div className='divTextos'>
        <p className='pSubtitulo'>Actualmente nuestras actividades para el desarrollo comunitario se realizan en:</p>
        <div className='divContenedorItems'>
          <p>Sala de estudio con conexión a internet y dispositivos digitales.</p>
          <p>Juegoteca para actividades recreativas y de aprendizaje.</p>
          <p>Sala de lectura</p>
          <p>Patio con juegos de plaza, arenero y casita de madera.</p>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  )
}

export default Espacios