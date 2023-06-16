import logo from './logo.svg';
import './App.css';


import LogoStarWars from './components/logoStartWars';
import IconsLeft from './components/socialIcons';
import ResearchIcon from './components/searchIcons';


function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className='principal-header'> 
          <IconsLeft></IconsLeft>
          <LogoStarWars></LogoStarWars>
          <ResearchIcon></ResearchIcon>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
