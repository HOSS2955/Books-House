import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Homecarousel.css";
function HomeCarousel() {
  return (
    <div className="customHeight">
      <Carousel className="customHeight text-center">
        <Carousel.Item>
          <Button variant="warning" className="position-absolute mt-5 p-3 ">
            Buy Now
          </Button>
          <img
            className="d-block w-100"
            src="images/Homecarousel-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Button variant="warning" className="position-absolute mt-5 p-3">
            Buy Now
          </Button>
          <img
            className="d-block w-100"
            src="images/Homecarousel-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <Button variant="warning" className="position-absolute mt-5 p-3">
            Buy Now
          </Button>
          <img
            className="d-block w-100"
            src="images/Homecarousel-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
