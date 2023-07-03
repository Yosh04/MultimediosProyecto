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


function App() {
  const images = [
    { src: 'https://images7.alphacoders.com/671/thumbbig-671281.webp', alt: 'Image 1' },
    { src: 'https://images3.alphacoders.com/114/thumbbig-11439.webp', alt: 'Image 2' },
    { src: 'https://images8.alphacoders.com/131/thumbbig-1311649.webp', alt: 'Image 3' },
    { src: 'https://images3.alphacoders.com/131/thumbbig-1310689.webp', alt: 'Image 4' },
  
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

export default App;
