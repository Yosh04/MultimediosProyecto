import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

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
                <div className={image.side}>
                  <div className="content">
                    <div>
                      <img
                        className={image.imageInfo?.className}
                        data-src={image.imageInfo?.['data-src']}
                        alt={image.imageInfo?.alt}
                        tabIndex={image.imageInfo?.tabIndex}
                        style={image.imageInfo?.style}
                        data-width={image.imageInfo?.['data-width']}
                        data-height={image.imageInfo?.['data-height']}
                        data-aspect_ratio={image.imageInfo?.['data-aspect_ratio']}
                        data-orientation={image.imageInfo?.['data-orientation']}
                        data-legacy={image.imageInfo?.['data-legacy']}
                        src={image.imageInfo?.src}
                        width={image.imageInfo?.width}
                        height={image.imageInfo?.height}
                      />
                    </div>
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
