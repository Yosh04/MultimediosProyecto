import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const renderIndicators = () => {
    return (
      <ol className="carousel-indicators">
        {data.map((item, index) => (
          <li
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleSelect(index)}
          >
            <img src={item.thumbnail} alt={`Slide ${index + 1}`} />
          </li>
        ))}
      </ol>
    );
  };

  const data = [
    {
      image: "https://images3.alphacoders.com/131/thumbbig-1310689.webp",
      thumbnail: "https://images3.alphacoders.com/131/thumb-1310689.webp",
      title: 'Título del Slide 1',
      description: 'Descripción del Slide 1',
      link: '/enlace1'
    },
    {
      image: 'https://images8.alphacoders.com/131/thumbbig-1311649.webp',
      thumbnail: 'https://images8.alphacoders.com/131/thumbbig-1311649.webp',
      title: 'Título del Slide 2',
      description: 'Descripción del Slide 2',
      link: '/enlace2'
    },
    {
      image: 'https://images3.alphacoders.com/114/thumbbig-11439.webp',
      thumbnail: 'https://images3.alphacoders.com/114/thumbbig-11439.webp',
      title: 'Título del Slide 3',
      description: 'Descripción del Slide 3',
      link: '/enlace3'
    },
    {
      image: 'https://images7.alphacoders.com/671/thumbbig-671281.webp',
      thumbnail: 'https://images7.alphacoders.com/671/thumbbig-671281.webp',
      title: 'Título del Slide 4',
      description: 'Descripción del Slide 4',
      link: '/enlace4'
    }
  ];
  return (
    <div className = "carousel-container">
      <Carousel indicators = {true}>
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
          <Carousel.Caption className="miniature-caption">
            <img
              src="https://images3.alphacoders.com/131/thumb-1310689.webp"
              alt="Miniatura Slide 1"
              className="miniature-image"
            />
            <p>Texto miniatura Slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images8.alphacoders.com/131/thumbbig-1311649.webp"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Título del Slide 1</h3>
            <p>Descripción del Slide 1</p>
            <a href="/enlace1">Enlace 1</a>
          </Carousel.Caption>
          <Carousel.Caption className="miniature-caption">
            <img
              src="https://images8.alphacoders.com/131/thumbbig-1311649.webp"
              alt="Miniatura Slide 1"
              className="miniature-image"
            />
            <p>Texto miniatura Slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images3.alphacoders.com/114/thumbbig-11439.webp"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Título del Slide 1</h3>
            <p>Descripción del Slide 1</p>
            <a href="/enlace1">Enlace 1</a>
          </Carousel.Caption>
          <Carousel.Caption className="miniature-caption">
            <img
              src="https://images3.alphacoders.com/114/thumbbig-11439.webp"
              alt="Miniatura Slide 1"
              className="miniature-image"
            />
            <p>Texto miniatura Slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images7.alphacoders.com/671/thumbbig-671281.webp"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Título del Slide 1</h3>
            <p>Descripción del Slide 1</p>
            <a href="/enlace1">Enlace 1</a>
          </Carousel.Caption>
          <Carousel.Caption className="miniature-caption">
            <img
              src="https://images7.alphacoders.com/671/thumbbig-671281.webp"
              alt="Miniatura Slide 1"
              className="miniature-image"
            />
            <p>Texto miniatura Slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      {renderIndicators}
    </div>
  );
};

export default CarouselComponent;
