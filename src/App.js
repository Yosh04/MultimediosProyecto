import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import LogoStarWars from './components/logoStartWars';
import IconsLeft from './components/socialIcons';
import ResearchIcon from './components/searchIcons';
import BarInfo from './components/AppBarInfo';
import CarouselComponent from './components/CarouselComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className='principal-header'> 
          <IconsLeft></IconsLeft>
          <LogoStarWars></LogoStarWars>
          <ResearchIcon></ResearchIcon>
          
        </div>
        <CarouselComponent />
        <BarInfo></BarInfo>
        
      </header>
      
    </div>
  );
}

export default App;
