// import logo from './logo.svg';
import './App.scss';

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
import { AttractionItem } from './Pages/AttractionItem';
import { router } from './Pages/router.config';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ContentWrap } from './Components/Main/ContentWrap';
import { VideoItem } from './Pages/VideoItem';
import { InterestingAll } from './Pages/InterestingAll';





function App() {
  return (
    <>      
      <BrowserRouter>
        <Header></Header> 
        {/* <ContentWrap> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/attractions" element={<AllAttraction />} />
            <Route path="/attractions/:id" element={<AttractionItem />} />
            <Route path="/videos" element={<AllVideo />} />
            {/* <Route path="/videos/:id" element={<VideoItem />} /> */}
            <Route path="/interesting" element={<InterestingAll />} />
           
            
          </Routes>
        
        {/* </ContentWrap> */}
        <Footer></Footer>
      </BrowserRouter>
    </>

  );
}

export default App;
