// import logo from './logo.svg';
import './App.css';
import { Attractions } from './Components/Attractions/Attractions';
import { Footer } from './Components/Footer/Footer';
import { Fullscreen } from './Components/Fullscreen/Fullscreen';
import { Header } from './Components/Header/Header';
import { Interesting } from './Components/Interesting/Interesting';
import { Restaurant } from './Components/Restaurant/Restaurant';
import { Video } from './Components/Video/Video';

function App() {
  return (
    <>
      
      <Header></Header> 
      <Fullscreen></Fullscreen>
      <Attractions></Attractions> 
      <Video></Video>
      <Restaurant></Restaurant>
      <Interesting></Interesting>
      <Footer></Footer>
    
    </>
  

  );
}

export default App;
