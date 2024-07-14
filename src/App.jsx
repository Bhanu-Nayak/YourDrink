import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import {
  About,
  Newsletter,
  Homelayout,
  Landing,
  Cocktail,
  Error,
  Singlepageerror,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        errorElement: <Singlepageerror />,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <Singlepageerror />,
      },
      { path: "/about", element: <About /> },
      { path: "/newsletter", element: <Newsletter /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
