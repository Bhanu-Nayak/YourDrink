import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Newsletter,
  Homelayout,
  Landing,
  Cocktail,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/cocktail", element: <Cocktail /> },
      { path: "/about", element: <About /> },
      { path: "/newsletter", element: <Newsletter /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
