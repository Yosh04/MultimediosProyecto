import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CorouselNewsFeatures() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      class="NewFacturesCorouse"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item class="NewFacturesCorouseItem">
        <div class="NewFacturesCorouseItemContainer">
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
            <div className="notch">
              <div className="notch-left-diagonal"></div>
              <div className="notch-rigth-diagonal"></div>
            </div>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
          <div className="notch">
            <div className="notch-left-diagonal"></div>
            <div className="notch-rigth-diagonal"></div>
          </div>
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </div>
        <div className="notchT">
          <div className="notch-left-diagonalT"></div>
          <div className="notch-rigth-diagonalT"></div>
        </div>
      </Carousel.Item>

      <Carousel.Item class="NewFacturesCorouseItem">
        <div class="NewFacturesCorouseItemContainer">
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>Fourth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
          <div className="notch">
              <div className="notch-left-diagonal"></div>
              <div className="notch-rigth-diagonal"></div>
            </div>
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>Fifth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
          <div className="notch">
              <div className="notch-left-diagonal"></div>
              <div className="notch-rigth-diagonal"></div>
            </div>
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>6st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item class="NewFacturesCorouseItem">
        <div class="NewFacturesCorouseItemContainer">
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>7th slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
          <div className="notch">
              <div className="notch-left-diagonal"></div>
              <div className="notch-rigth-diagonal"></div>
            </div>
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>8st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
          <div className="notch">
              <div className="notch-left-diagonal"></div>
              <div className="notch-rigth-diagonal"></div>
            </div>
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFacturesCorouseImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFacturesCorouseElement">
              <h3>9st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </div>
        <div className="notch">
          <div className="notch-left-diagonal"></div>
          <div className="notch-rigth-diagonal"></div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CorouselNewsFeatures;
