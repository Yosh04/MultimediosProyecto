
import './App.css';


import LogoStarWars from './components/logoStartWars';
import IconsLeft from './components/socialIcons';
import ResearchIcon from './components/searchIcons';
import BarInfo from './components/AppBarInfo';

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
        <h1 > Peter </h1>
      </header>
      <Footer />  
    </div>
  );
}

export default App;
