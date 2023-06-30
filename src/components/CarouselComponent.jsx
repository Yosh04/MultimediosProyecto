import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CarouselComponent = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={activeIndex} onSelect={handleSelect} className="carousel">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Card className="carousel-card">
            <Card.Img variant="top" src={image.src} alt={image.alt} className="carousel-image" />
            <Card.Body>
              <Card.Title>Slide {index + 1} Title</Card.Title>
              <Card.Text>Slide {index + 1} Description</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;



