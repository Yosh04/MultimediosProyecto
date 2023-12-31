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
                <div className="grupBloxsCarousel">
                  <div className="contentGroup">
                    <div className='boxgroupCarousel bg-boxgroup1'>
                      <h5>DISNEY GALLERY: THE MANDALORIAN</h5>
                    </div>
                    <div className='boxgroupCarousel bg-boxgroup2'>
                      <h5>STAR WARS: OUTLAWS REVEALED</h5>
                    </div>
                    <div className='boxgroupCarousel bg-boxgroup3'>
                      <h5>OBI-WAN KENOBI DISNEY+ SERIES TO COMICS</h5>
                    </div>
                  </div>
                </div>
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
                    <div className='text-container'>
                      <h2>{image.titleinfo}</h2>
                      <h3>{image.textInfo}</h3>
                    </div>
                    <div className="link-container">
                      <a href="https://youtu.be/c7K2TA0bBpY" class={image.bottonYellow} role="button" data-youtube-id="c7K2TA0bBpY" tabindex="0">  Watch Now </a>
                      <a href="https://youtu.be/c7K2TA0bBpY" class={image.bottonBlack} role="button" data-youtube-id="c7K2TA0bBpY" tabindex="0">  Watch Now </a>
                    </div>
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
