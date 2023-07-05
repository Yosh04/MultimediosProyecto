import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import NotchContain from "./NotchContain";

function CarouselExploreMore() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
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
                src="https://acortar.link/iKItc4"
                alt="First slide"
                style={{ width: "448px", height: "180px" }}
              />
              <Carousel.Caption class="NF-LV-Carousel-Element">
                <h3>First slide label</h3>
                 
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
                <h3>Second slide label</h3>
                 
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
                <h3>Third slide label</h3>
                 
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
  