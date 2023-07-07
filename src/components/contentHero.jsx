import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ContentHero = () => {
    //Codigo para controlar el carrucel inferior.
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error(error));
    }, []);


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
                                        src={`https://starwars-visualguide.com/assets/img/characters/${2}.jpg`}
                                        alt="First slide"
                                        style={{ width: "448px", height: "200px" }}
                                    />
                                    <Carousel.Caption class="NewFeaturesCarouselElement">
                                        <h4>Character Name {characters[1]?.name}</h4>
                                        <div className="notchHero">
                                            <div className="notch-left-diagonalHero"></div>
                                            <div className="notch-rigth-diagonalHero"></div>
                                        </div>
                                    </Carousel.Caption>
                                </div>

                                <div class="NewFeactureGroupItem">
                                    <img
                                        className="d-block w-10 NewFeaturesCarouselImg"
                                        src={`https://starwars-visualguide.com/assets/img/characters/${4}.jpg`}
                                        alt="First slide"
                                        style={{ width: "448px", height: "200px" }}
                                    />
                                    <Carousel.Caption class="NewFeaturesCarouselElement">
                                        <h4>Name {characters[3]?.name}</h4>
                                        <div className="notchHero">
                                            <div className="notch-left-diagonalHero"></div>
                                            <div className="notch-rigth-diagonalHero"></div>
                                        </div>
                                    </Carousel.Caption>
                                </div>

                                <div class="NewFeactureGroupItem">
                                    <img
                                        className="d-block w-10 NewFeaturesCarouselImg"
                                        src={`https://starwars-visualguide.com/assets/img/characters/${8}.jpg`}
                                        alt="First slide"
                                        style={{ width: "448px", height: "200px" }}
                                    />
                                    <Carousel.Caption class="NewFeaturesCarouselElement">
                                        <h4>Name {characters[7]?.name}</h4>
                                        <div className="notchHero">
                                            <div className="notch-left-diagonalHero"></div>
                                            <div className="notch-rigth-diagonalHero"></div>
                                        </div>
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