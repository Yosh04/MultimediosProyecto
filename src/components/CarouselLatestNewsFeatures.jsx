import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from 'react';
import NewsLink from "./NewsLink";
//import NotFoundLink from "./NotFoundLink";
//import HomeLink from "./HomeLink";

function CarouselNewsFeatures() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="Carousel-Div-Master">
      <div className="Carousel-Div-Title">
        <h2>Latest News + Features</h2>
        <a className="button-a-VM" style={{}} href="/news">
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
              <NewsLink to="/News">
                <div>
                  <img
                    className="d-block w-10 NF-LV-Carousel-Img"
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${8}.jpg`}
                    alt="First slide"
                    style={{ width: "448px", height: "180px" }}
                  />
                  <Carousel.Caption class="NF-LV-Carousel-Element">
                  <h3>{vehicles[7]?.name}</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <div className="notch">
                      <div className="notch-left-diagonal"></div>
                      <div className="notch-rigth-diagonal"></div>
                    </div>
                  </Carousel.Caption>
                </div>
              </NewsLink>
            </div>

            <div class="Carousel-Group-Item">
              <img
                className="d-block w-10 NF-LV-Carousel-Img"
                src={`https://starwars-visualguide.com/assets/img/vehicles/${4}.jpg`}

                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{vehicles[3]?.name}</h3>
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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${14}.jpg`}
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
              <h3>{vehicles[13]?.name}</h3>
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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${6}.jpg`}
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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${6}.jpg`}
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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${6}.jpg`}
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

export default CarouselNewsFeatures;
