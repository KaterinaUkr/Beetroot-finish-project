import { createBrowserRouter } from "react-router-dom";

import { AllVideo } from './AllVideo';
import { AllAttraction } from './AllAttraction';
import { Home } from './Home';
import { Interesting } from './Interesting';
import { Restaurant } from "./Restaurant";

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
    path: "/rest",      
    element: <Restaurant />,
  },
     {
    path: "/interesting",
    element: <Interesting />,
  },
]);