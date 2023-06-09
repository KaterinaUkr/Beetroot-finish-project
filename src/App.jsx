// import logo from './logo.svg';
import './App.scss';
import { AllAttraction } from './Components/Attractions/AllAttraction/AllAttraction';
import { AttractionItem } from './Components/Attractions/AttractionItem/AttractionItem';
import { Attractions } from './Components/Attractions/Attractions';

import { Footer } from './Components/Footer/Footer';
import { Fullscreen } from './Components/Fullscreen/Fullscreen';
import { Header } from './Components/Header/Header';
// import { Restaurant } from './Components/Restaurant/Restaurant';
import { Interesting } from './Components/Interesting/Interesting';
// import { Video } from './Components/Video/Video';

function App() {
  return (
    <>
      
      <Header></Header> 
      <Fullscreen></Fullscreen>
      <Attractions></Attractions> 
      {/* <AttractionItem></AttractionItem> */}
      {/* <AllAttraction></AllAttraction> */}
      {/* <Video></Video> */}
      {/* <Restaurant></Restaurant> */}
      <Interesting></Interesting>
      <Footer></Footer>
    
    </>
  

  );
}

export default App;
