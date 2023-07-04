import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoStarWars from './components/logoStartWars';
import IconsLeft from './components/socialIcons';
import ResearchIcon from './components/searchIcons';
import BarInfo from './components/AppBarInfo';
import HearderTile from './components/SubAppBarInfo';
import CarouselComponent from './components/CarouselComponent';
import ContentHero from './components/contentHero';
import CarouselNewsFeatures from './components/CarouselLatestNewsFeatures';
import CarouselExploreMore from './components/carouselExploreMore';
import CarouselLatestVideo from './components/CarouselLatestVideo';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


class Home extends React.Component {
  
    render() {
        const images = [
            { src: 'https://lumiere-a.akamaihd.net/v1/images/disney-gallery-the-mandalorian-s3-module-hero-desktop_d6f7c4e1.jpeg?region=0,0,2048,878', alt: 'Image 1' },
            { src: 'https://lumiere-a.akamaihd.net/v1/images/sw-outlaws-sashsingle-hero-desktop_08d0cff1.jpeg?region=0,0,2048,878', alt: 'Image 2' },
            { src: 'https://lumiere-a.akamaihd.net/v1/images/obi-wan-marvel-sashsingle-hero-desktop_6cd9c70f.jpeg?region=0,0,2048,878', alt: 'Image 3' },
          ];

    return (
        <div className="App">
        <div className='base-bg'> </div>
        <div className='secondary-bg'> </div>
          <header className="App-header">
            <div className='principal-header'>
              <IconsLeft></IconsLeft>
              <LogoStarWars className="LogoStarWars2"></LogoStarWars>
              <ResearchIcon></ResearchIcon>
            </div>
            <BarInfo></BarInfo>
          </header>
          <div className='Section_container'>
            <div className='Sections_Items_container'>
              <HearderTile></HearderTile>
              <CarouselComponent images={images} />
              <ContentHero></ContentHero>
              <CarouselNewsFeatures></CarouselNewsFeatures>
              <span className='after-Span-sp'></span>
              <CarouselLatestVideo></CarouselLatestVideo>
              <span className='after-Span-sp'></span>
              <CarouselExploreMore></CarouselExploreMore>
            </div>
          </div>
          <span className='after-Span-sp'></span>
          <Footer />
      </div>
    );
  }
}

class News extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='base-bg'> </div>
        <div className='secondary-bg'> </div>
          <header className="App-header">
            <div className='principal-header'>
              <IconsLeft></IconsLeft>
              <LogoStarWars className="LogoStarWars2"></LogoStarWars>
              <ResearchIcon></ResearchIcon>
            </div>
            <BarInfo></BarInfo>
          </header>
          <div className='Section_container'>
            <div className='Sections_Items_container'>
              <HearderTile></HearderTile>
              <div>
              Esto
              </div>
              <div>
                Es
              </div>
              <div>
                Solo
              </div>
              <div>
                Relleno
              </div>
            </div>
          </div>
          <span className='after-Span-sp'></span>
          <Footer />
      </div>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>La página que estás buscando no existe.</p>
        <div>
        <LogoStarWars className="LogoStarWars2"></LogoStarWars>
        </div>
      </div>
    );
  }
}

export { Home, News, NotFound };
