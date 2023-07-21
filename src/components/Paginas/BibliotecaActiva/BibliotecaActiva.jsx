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
          <h2>Actividades</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni, quo labore, dolor praesentium, vel sed laboriosam maiores quis nihil modi exercitationem qui? Ea maxime voluptatum recusandae deserunt nisi animi.</p>
          <div className='btnDiv'>
            <Link to='/Actividades'>
              <button>/O/</button>
            </Link>
          </div>
        </div>

        <div className='tarjeta'>
          <img src="" alt="" />
          <h2>Actividades</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni, quo labore, dolor praesentium, vel sed laboriosam maiores quis nihil modi exercitationem qui? Ea maxime voluptatum recusandae deserunt nisi animi.</p>
          <div className='btnDiv'>
            <Link to='/Servicios'>
              <button>/O/</button>
            </Link>
          </div>
        </div>

        <div className='tarjeta'>
          <img src="" alt="" />
          <h2>Actividades</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni, quo labore, dolor praesentium, vel sed laboriosam maiores quis nihil modi exercitationem qui? Ea maxime voluptatum recusandae deserunt nisi animi.</p>
          <div className='btnDiv'>
            <Link to='/Espacios'>
              <button>/O/</button>
            </Link>
          </div>

        </div>

      </section>
    </div>
  )
}

export default BibliotecaActiva