import React from 'react'
import './Servicios.css';

import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../../../public/imagenes/slide1.png'
import slide2 from '../../../../public/imagenes/slide2.png'
import slide3 from '../../../../public/imagenes/slide3.png'
import slide4 from '../../../../public/imagenes/slide4.png'

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
              className="d-block imCar w-100 img-fluid"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block imCar w-100 img-fluid"
              src={slide2}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block imCar w-100 img-fluid"
              src={slide3}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block imCar w-100 img-fluid"
              src={slide4}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  )
}

export default Servicios