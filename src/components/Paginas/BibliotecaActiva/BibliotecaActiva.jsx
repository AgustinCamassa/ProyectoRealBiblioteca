import React from 'react'
import './BibliotecaActiva.css'
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

const BibliotecaActiva = () => {

  return (

    <div className='divContenedor container'>
      <article className='Bloque row'>
        <section className='textoB1 col-lg-6'>
          <h1 className='h1Home'>11.000 libros disponibles</h1>
          <span>En Biblioteca Pupular Belgrano, contamos con 11.000 volúmenes para todas las edades, gustos y necesidades, incluyendo una biblioteca especial para niños.</span>
        </section>

        <section className='col-lg-6'>
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
                src="./libros.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imCar w-100"
                src="./libros.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </section>
      </article>

      <section className='contenedorTarjetas'>

        <div className='tarjeta'>
          <img src="" alt="" />
          <h2>Espacios</h2>
          <p className='p'>Contamos espacios para que todas las personas que asistan se sientan cómodas, según lo que deseen hacer. Conocé nuestras salas de estudio, lectura, juegoteca y patio para jugar o distraerse.</p>
          <div className='btnDiv'>
            <Link to='/Paginas/Espacios'>
              <button>/O/</button>
            </Link>
          </div>
        </div>

        <div className='tarjeta'>
          <img src="" alt="" />
          <h2>Servicios</h2>
          <p className='p'>Descubrí nuestros dos tipos de servicios, el de socios, para poder retirar libros, acceder a descuentos en talleres y mantenerse al tanto de novedades, y el de biblioteca pública, para acceder a libros en nuestras salas de lectura.</p>
          <div className='btnDiv'>
            <Link to='/Paginas/Servicios'>
              <button>/O/</button>
            </Link>
          </div>
        </div>

        <div className='tarjeta'>
          <img src="" alt="" />
          <h2>Actividades</h2>
          <p className='p'>Conocé acá nuestras actividades diarias exporádicas. Contamos con diversos talleres, clubes de lectura, encuentros culturales, seminarios, conferencias, animaciones de lectura, títeres, etc.</p>
          <div className='btnDiv'>
            <Link to='/Paginas/Actividades'>
              <button>/O/</button>
            </Link>
          </div>

        </div>

      </section>
    </div>
  )
}

export default BibliotecaActiva