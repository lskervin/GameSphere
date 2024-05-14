import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import GameList from './components/GameList.jsx';
import GameForm from './components/GameForm.jsx';
import GamePlay from './components/GamePlay.jsx'
import GameCard from './components/GameCard.jsx';
import GenreFilter from './components/GenreFilter.jsx';

const Main = () => {
  const routes = createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/home",
          element: <GameList/>,
        },
        {
          path: "/",
          element: <GameList />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/gameform",
          element: <GameForm />
        },
        {
          path: "/gamecard",
          element: <GameCard />,
        },
        {
          path:"/play-game",
          element: <GamePlay/>
        },
        {
          path: "/genrefilter",
          element: <GenreFilter />
        }
      ],
    },
  ]);

return (
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
