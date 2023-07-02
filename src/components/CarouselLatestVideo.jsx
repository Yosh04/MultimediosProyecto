import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselLatestVideo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="DivMaster">
    <div className="DivTitle">
      <h2>
      Latest Video
      </h2>
      <a
          className="bot-a-final"
          style={{}}
          href="/z"
        >
          View All
          <span className="bot-a-final-after"></span>
        </a>
      </div>
      <span className="afterSpanInDiv"></span>
    <Carousel
      class="NewFeaturesCarousel"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item class="NewFeaturesCarouselItem">
        <div class="NewFeaturesCarouselItemContainer">
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item class="NewFeaturesCarouselItem">
        <div class="NewFeaturesCarouselItemContainer">
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>Fourth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>Fifth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>6st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item class="NewFeaturesCarouselItem">
        <div class="NewFeaturesCarouselItemContainer">
          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>7th slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>8st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="notch">
                <div className="notch-left-diagonal"></div>
                <div className="notch-rigth-diagonal"></div>
              </div>
            </Carousel.Caption>
          </div>

          <div class="NewFeactureGroupItem">
            <img
              className="d-block w-10 NewFeaturesCarouselImg"
              src="https://acortar.link/iKItc4"
              alt="First slide"
              style={{ width: "448px", height: "116px" }}
            />
            <Carousel.Caption class="NewFeaturesCarouselElement">
              <h3>9st slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
