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
      <div>
        Lorem ipsum dolor sit amet consectetur adipiscing elit dis, cubilia nulla dignissim class posuere lacinia condimentum dapibus, lobortis cum felis enim turpis primis semper. Scelerisque aliquam ullamcorper aptent etiam tristique hac dictum ultrices commodo sagittis rutrum nisi, sapien tempor class varius euismod in justo tellus et ac litora, lobortis platea facilisi molestie phasellus iaculis enim metus laoreet penatibus praesent. Interdum sed curae primis mollis quisque imperdiet, mauris purus pulvinar senectus phasellus tellus augue, ligula taciti gravida habitasse morbi.
        Magnis eget egestas cubilia morbi leo fames hendrerit at, nullam ultrices mauris felis tellus sociis nulla. Ornare mattis tempor primis nec integer nascetur elementum, platea aenean euismod auctor ultrices aliquam quam, senectus mi enim egestas eu ut. Erat ullamcorper ultricies arcu sollicitudin feugiat semper commodo a cursus, potenti rutrum ornare interdum magna dignissim natoque metus nec, volutpat maecenas parturient quis porta lobortis molestie diam.
      </div>
    </div>
  );
}

export default App;
