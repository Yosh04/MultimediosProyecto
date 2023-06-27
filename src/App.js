import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import LogoStarWars from './components/logoStartWars';
import IconsLeft from './components/socialIcons';
import ResearchIcon from './components/searchIcons';
import BarInfo from './components/AppBarInfo';
import CarouselComponent from './components/CarouselComponent';
import Section2clips from './components/Secction2clips';
import ContentHero from './components/contentHero';
import CorouselNewsFeatures from './components/CorouselLatestNewsFeatures';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className='principal-header'> 
          <IconsLeft></IconsLeft>
          <LogoStarWars></LogoStarWars>
          <ResearchIcon></ResearchIcon>
          
        </div>
        
        <BarInfo></BarInfo>
        
        
      </header>
      <CarouselComponent />
      <Section2clips></Section2clips>
      <ContentHero></ContentHero>
      <CorouselNewsFeatures></CorouselNewsFeatures>

      <Footer />  
    </div>
  );
}

export default App;
