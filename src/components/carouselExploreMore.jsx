import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import NotchContain from "./NotchContain";
import React, { useEffect } from 'react';

function CarouselExploreMore() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const [species, setSpecies] = useState([]);
    useEffect(() => {
      fetch('https://swapi.dev/api/species/')
        .then(response => response.json())
        .then(data => setSpecies(data.results))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div className="Carousel-Div-Master">
      <div className="Carousel-Div-Title">
        <h2>
        Explore More
        </h2>
      </div>
      <span className="after-Span-In-Div"></span>
      <Carousel
        class="NF-LV-Carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item class="Carousel-Item-NF-LV">
          <div class="NF-LV-Carousel-Item-Container">
            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src={`https://starwars-visualguide.com/assets/img/species/${3}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{species[2]?.name}</h3>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>
  
            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src={`https://starwars-visualguide.com/assets/img/species/${4}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{species[3]?.name}</h3>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>
  
            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src={`https://starwars-visualguide.com/assets/img/species/${5}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{species[4]?.name}</h3>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
  
        <Carousel.Item class="Carousel-Item-NF-LV">
          <div class="NF-LV-Carousel-Item-Container">
            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src="https://acortar.link/iKItc4"
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
                <h3>Fourth slide label</h3>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>
  
            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src="https://acortar.link/iKItc4"
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
                <div>
                <NotchContain></NotchContain>
                </div>
                
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>
  
            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src="https://acortar.link/iKItc4"
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
                <h3>6st slide label</h3>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default CarouselExploreMore;
  