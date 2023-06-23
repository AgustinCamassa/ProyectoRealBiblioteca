import React from 'react'
import './Actividades.css';
import Carousel from 'react-bootstrap/Carousel';

const Actividades = () => {
  return (
    <div>
        <h2>Actividades</h2>
        <h3>Contamos con actividades de extensión cultural:</h3>
        <section>
            <article>
                <h4>Esporádicos</h4>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis nam in nisi culpa debitis, ullam eum. Harum totam, culpa a iste illum tempore? Maxime, adipisci. Ratione quam nostrum obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus culpa quia odit excepturi illo rem numquam eius qui cum, itaque voluptatem vitae praesentium distinctio nisi quas aut modi accusantium in?</span>
            </article>

            <article>
                <h4>Diarios</h4>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus quas eius facilis ullam ut, eveniet quasi delectus odio iusto nobis ipsum dolorum accusamus. Corrupti ipsa beatae dignissimos porro repellat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe natus laudantium culpa facere illum nisi, nobis consectetur autem necessitatibus, consequatur numquam obcaecati ipsum cumque velit temporibus illo est minus provident?</span>
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