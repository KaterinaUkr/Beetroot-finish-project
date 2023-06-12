// import logo from './logo.svg';
import './App.scss';

import { AttractionItem } from './Components/Attractions/AttractionItem/AttractionItem';
import { Attractions } from './Components/Attractions/Attractions';

import { Footer } from './Components/Footer/Footer';
import { Fullscreen } from './Components/Fullscreen/Fullscreen';
import { Header } from './Components/Header/Header';
// import { Restaurant } from './Components/Restaurant/Restaurant';

import { Main } from './Components/Main/Main';
import { Video } from './Components/Video/Video';
import { AllVideo } from './Pages/AllVideo';
import { Home } from './Pages/Home';
import { AllAttraction } from './Pages/AllAttraction';
import { Interesting } from './Pages/Interesting';
import { router } from './Pages/router.config';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ContentWrap } from './Components/Main/ContentWrap';


function App() {
  return (
    <>      
      <BrowserRouter>
        <Header></Header> 
        {/* <ContentWrap> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/attractions" element={<AllAttraction />} />
            <Route exact path="/videos" element={<AllVideo />} />
            <Route exact path="/interesting" element={<Interesting />} />
            
          </Routes>
        
        {/* </ContentWrap> */}
        <Footer></Footer>
      </BrowserRouter>
    </>

  );
}

export default App;
