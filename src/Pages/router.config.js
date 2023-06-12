import { createBrowserRouter } from "react-router-dom";

import { AllVideo } from './AllVideo';
import { AllAttraction } from './AllAttraction';
import { Home } from './Home';
import { Interesting } from './Interesting';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/attractions",
    element: <AllAttraction />,
  },
    {
    path: "/videos",      
    element: <AllVideo />,
  },
     {
    path: "/interesting",
    element: <Interesting />,
  },
]);