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
            <Card.Body>
              <div className="overlay">
              <Card.Img variant="top" src={image.src} alt={image.alt} className="carousel-image" />
                <div className="overlay-content">
                  <div className="content">
                    <h2>Título del contenido</h2>
                    <p>Aquí puedes agregar cualquier texto adicional.</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;



