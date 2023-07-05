import React from 'react';
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import HomeLink from "./HomeLink";


const NFContent = () => {
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
                                <p>Esta sección no fue implementada, pero se puede visitar como funcionalidad de las rutas</p>
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
                                        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                                        alt="First slide"
                                        style={{ width: "448px", height: "200px" }}
                                    />
                                </div>

                                    <HomeLink to="/">
                                <div class=".NF-GroupItem">
                                    <div className='bg-nf'>
                                    <img
                                        className="d-block w-10 Img"
                                        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                                        alt="First slide"
                                        style={{ width: "448px", height: "200px" }}
                                    />
                                    </div>
                                    <Carousel.Caption class="NF-CarouselElement">
                                        <h4>Volver a la página principal</h4>
                                        <div className="notchHero">
                                            <div className="notch-left-diagonalHero"></div>
                                            <div className="notch-rigth-diagonalHero"></div>
                                        </div>
                                    </Carousel.Caption>
                                </div>
                                    </HomeLink>

                                <div class="NewFeactureGroupItem">
                                    <img
                                        className="d-block w-10 NewFeaturesCarouselImg"
                                        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                                        alt="First slide"
                                        style={{ width: "448px", height: "200px" }}
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default NFContent;