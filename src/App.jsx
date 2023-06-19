import './App.scss';

import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { AllVideo } from './Pages/AllVideo';
import { Home } from './Pages/Home';
import { AllAttraction } from './Pages/AllAttraction';
import { AttractionItem } from './Pages/AttractionItem';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { InterestingAll } from './Pages/InterestingAll';
import { Restaurant } from './Pages/Restaurant';

function App() {
  return (
    <>      
      <BrowserRouter>
        <Header></Header> 
       
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/attractions" element={<AllAttraction />} />
            <Route path="/attractions/:id" element={<AttractionItem />} />
            <Route path="/videos" element={<AllVideo />} />
            <Route path="/rest" element={<Restaurant />} />            
            <Route path="/interesting" element={<InterestingAll />} />           
            
          </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
    </>

  );
}

export default App;
