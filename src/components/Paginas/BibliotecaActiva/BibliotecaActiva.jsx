import React from 'react'
import './BibliotecaActiva.css'
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BibliotecaActiva = () => {

  return (

    <div className='divContenedor'>
      <article className='primerBloque container'>
        <section className='textoB1 col-6'>
          <h2>11.000 libros disponibles</h2>
          <span>En Biblioteca Pupular Belgrano, contamos con 11.000 volúmenes para todas las edades, gustos y necesidades, incluyendo una biblioteca especial para niños.</span>
        </section>

        <section className='col-6'>
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

      <section className='segudoBloque container'>

        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Actividades</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium nihil dolore quo, illum in quibusdam. Voluptates error sunt corporis natus nobis illum quibusdam inventore, aliquid, rerum iusto dicta eligendi.
            </Card.Text>
            <Link to='/paginas/actividades'>
              <Button variant="primary">Actividades</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Servicios</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium nihil dolore quo, illum in quibusdam. Voluptates error sunt corporis natus nobis illum quibusdam inventore, aliquid, rerum iusto dicta eligendi.
            </Card.Text>
            <Link to='/Servicios'>
              <Button variant="primary">Servicios</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Espacios  </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium nihil dolore quo, illum in quibusdam. Voluptates error sunt corporis natus nobis illum quibusdam inventore, aliquid, rerum iusto dicta eligendi.
            </Card.Text>
            <Link to='/Espacios'>
              <Button variant="primary">Espacios</Button>
            </Link>
          </Card.Body>
        </Card>

      </section>
    </div>
  )
}

export default BibliotecaActiva