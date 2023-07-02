import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import LogoStarWars from './components/logoStartWars';
import IconsLeft from './components/socialIcons';
import ResearchIcon from './components/searchIcons';
import BarInfo from './components/AppBarInfo';
import HearderTile from './components/SubAppBarInfo';
import CarouselComponent from './components/CarouselComponent';
import Section2clips from './components/Secction2clips';
import ContentHero from './components/contentHero';
import CarouselNewsFeatures from './components/CarouselLatestNewsFeatures';
import CarouselExploreMore from './components/carouselExploreMore';
import CarouselLatestVideo from './components/CarouselLatestVideo';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className='base-bg'> </div>
      <div className='secondary-bg'> </div>
        <header className="App-header">
          <div className='principal-header'>
            <IconsLeft></IconsLeft>
            <LogoStarWars></LogoStarWars>
            <ResearchIcon></ResearchIcon>
          </div>
          <BarInfo></BarInfo>
        </header>
        <div className='Section_container'>
          <div className='Sections_Items_container'>
            <HearderTile></HearderTile>
            <CarouselComponent />
            <Section2clips></Section2clips>
            <ContentHero></ContentHero>
            <CarouselNewsFeatures></CarouselNewsFeatures>
            <span className='afterSpan'></span>
            <CarouselLatestVideo></CarouselLatestVideo>
            <span className='afterSpan'></span>
            <CarouselExploreMore></CarouselExploreMore>
          </div>
        </div>
        <span className='afterSpan'></span>
        <Footer />
    </div>
  );
}

export default App;
