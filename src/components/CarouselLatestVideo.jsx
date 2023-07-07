import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import React, { useEffect } from 'react';

function CarouselLatestVideo() {
  const [index, setIndex] = useState(3);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [planets, setPlanets] = useState([]);

useEffect(() => {
  fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => setPlanets(data.results))
    .catch(error => console.error(error));
}, []);

  return (
    <div className="Carousel-Div-Master">
      <div className="Carousel-Div-Title">
        <h2>Latest Video</h2>
        <a className="button-a-VM" style={{}} href="/video">
          View All
          <span className="button-a-final-after"></span>
        </a>
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
                src={`https://starwars-visualguide.com/assets/img/planets/${2}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{planets[1]?.name}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>

            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src={`https://starwars-visualguide.com/assets/img/planets/${3}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{planets[2]?.name}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <div className="notch">
                  <div className="notch-left-diagonal"></div>
                  <div className="notch-rigth-diagonal"></div>
                </div>
              </Carousel.Caption>
            </div>

            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src={`https://starwars-visualguide.com/assets/img/planets/${4}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{planets[3]?.name}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <h3>Fifth slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <h3>7th slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <h3>8st slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
                <h3>9st slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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

export default CarouselLatestVideo;
