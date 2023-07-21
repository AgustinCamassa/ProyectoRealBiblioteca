import React from 'react'
import './Servicios.css';

import Carousel from 'react-bootstrap/Carousel';

const Servicios = () => {
  return (
    <div className='container'>
      <h1 className='h1Servicios'>Servicios</h1>
      <section className='sectionServicios'>
        <article className='articlesServicios'>
          <p className='pSubtituloServicios'>Servicio de Biblioteca a Socios</p>
          <div className='divContenedorItemsS'>
            <p>Retirar libros en préstamo a domicilio por el plazo de un mes, renovable si no hay otros socios esperando el mismo material.</p>
            <p>- Acceso a más de 11.000 volúmenes para todas las edades, gustos y necesidades; incluyendo una biblioteca especial para niños.</p>
            <p>- Descuentos en el arancel de los talleres.</p>
            <p>- Solo pueden ser parte del Taller Maternal quienes sean socios de la Biblioteca previamente.</p>
            <p>- Envió de novedades por WhatsApp.</p>
            <p>- Podrán ser miembros de la comisión directiva cada vez que se renueve.</p>
          </div>
        </article>

        <article className='articlesServicios'>
          <p className='pSubtituloServicios'>Servicio de Biblioteca Pública</p>
          <div className='divContenedorItemsS'>
            <p>- Prestamos el servicio de biblioteca pública en forma gratuita, por lo cuál no es necesario asociarse y en cualquier momento puede leer el material de su interés en nuestra sala de lectura.</p>
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

export default Servicios