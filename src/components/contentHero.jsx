import React from 'react';
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


const ContentHero = () => {
    //Codigo para controlar el carrucel inferior.
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div class='HeroSectionContent'>
            <div className='HeroContent'>
                <div className="overlay">
                    <img src='https://lumiere-a.akamaihd.net/v1/images/ahsoka-tentpolehero-desktop_9bd627d0.jpeg?region=0,0,1600,600' alt="Ahsoka Tano"></img>
                    <div className="overlay-content">
                        <div className="content">
                            <div className='heroPictures'>
                                <img src='https://lumiere-a.akamaihd.net/v1/images/ahsoka-logo-desktop_d671a444.png?region=0,0,800,250' alt="Ahsoka Logo"></img>
                            </div>
                            <div className='heroDescription'>
                                <p>Ahsoka Tano investigates an emerging threat to the galaxy. Original series streaming August 23, only on Disney+. </p>
                            </div>
                            <div className='heroButton'>
                                <a href="https://www.starwars.com/series/star-wars-ahsoka" class="aSimulationButon" role="button">  Explore </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='HeroCarouselList'>
            <div>
                    <Carousel
                        class="NewFeaturesCarousel"
                        activeIndex={index}
                        onSelect={handleSelect}
                    >
                        <Carousel.Item class="NewFeaturesCarouselItemHero">
                            <div class="NewFeaturesCarouselItemContainerHero">
                                <div class="NewFeactureGroupItem">
                                    <img
                                        className="d-block w-10 NewFeaturesCarouselImg"
                                        src="https://acortar.link/iKItc4"
                                        alt="First slide"
                                        style={{ width: "448px", height: "116px" }}
                                    />
                                    <Carousel.Caption class="NewFeaturesCarouselElement">
                                        <h3>First slide label</h3>
                                        <p>Parr 1.</p>
                                        <div className="notchHero">
                                            <div className="notch-left-diagonalHero"></div>
                                            <div className="notch-rigth-diagonalHero"></div>
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
                                        
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        </div>
    );
};

export default ContentHero;