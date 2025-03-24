import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Rooms from './Pages/Rooms';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/explore",
      element: <Explore/>,
    },
    {
      path: "/rooms",
      element: <Rooms/>
    },

    {
      path: "/about",
      element: <About/>
    },

    {
      path: "/contact",
      element: <Contact/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
