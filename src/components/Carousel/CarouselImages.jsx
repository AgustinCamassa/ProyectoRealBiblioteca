import { Carousel } from "react-bootstrap";

const CarouselImages = ({ slides }) => {
  return (
    <>
      <Carousel data-bs-theme="dark" className="carouselLongerDevices">
        {slides.map((images, index) => (
          <Carousel.Item interval={3000} key={index}>
            <div className="d-flex gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="d-block imCar w-100  img-fluid"
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default CarouselImages;
