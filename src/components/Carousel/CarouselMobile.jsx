import { Carousel } from "react-bootstrap";

const CarouselMobile = ({ slides }) => {
  return (
    <Carousel data-bs-theme="dark" className="carouselShorterDevices">
      {slides.map((image, index) => (
        <Carousel.Item interval={3000} key={index}>
          <div className="d-flex gap-2">
            <img
              key={index}
              src={image}
              className="d-block imCar w-100 img-fluid"
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default CarouselMobile;
