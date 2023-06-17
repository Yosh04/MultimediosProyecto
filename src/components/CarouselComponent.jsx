import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/131/thumbbig-1310689.webp"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Título del Slide 1</h3>
          <p>Descripción del Slide 1</p>
          <a href="/enlace1">Enlace 1</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images8.alphacoders.com/131/thumbbig-1311649.webp"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Título del Slide 2</h3>
          <p>Descripción del Slide 2</p>
          <a href="/enlace2">Enlace 2</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/114/thumbbig-11439.webp"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Título del Slide 2</h3>
          <p>Descripción del Slide 2</p>
          <a href="/enlace3">Enlace 2</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
