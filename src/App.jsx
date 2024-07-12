import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      { path: "/cocktail/:id", element: <Cocktail /> },
      { path: "/about", element: <About /> },
      { path: "/newsletter", element: <Newsletter /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
