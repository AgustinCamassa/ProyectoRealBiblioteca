import React from 'react'
import './Nosotros.css'
import Carousel from 'react-bootstrap/Carousel';

const Nosotros = () => {
  return (

    <div className='divContenedorN'>
      <article className='primerBloqueN'>
        <h2 className='titN'>Conocé la Biblioteca Popular Belgrano</h2>
        <section className='spanContenedorN container'>
          <div className='col-6'>
            <span className='spanN'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias placeat perspiciatis, nesciunt nobis minus sint quidem
            </span>
            <span className='spanN'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias placeat perspiciatis, nesciunt nobis minus sint quidem
            </span>
          </div>
          <div className='col-6'>
            <span className='spanN'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias placeat perspiciatis, nesciunt nobis minus sint quidem
            </span>
            <span className='spanN'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias placeat perspiciatis, nesciunt nobis minus sint quidem
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

      <article className='artMedio'>
        <h2>Estamos trabajando para vos</h2>
        <div className='boxInfoN container'>
          <section className='textoN col-6'>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolore natus vel esse.
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos obcaecati accusantium iste nam provident.
              </span>
              <button>
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