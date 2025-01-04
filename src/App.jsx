import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { AppLayout } from "./AppLayout";
import { Contact } from "./Pages/Contact";
import { Movie } from "./Pages/Movies";
import { AboutInnerPage } from "./Pages/AboutInnerPage";
import { movieList } from "./api/MovieList";
import "./App.css";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // Use the AppLayout as the wrapper
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movie />,
          loader: movieList,
        },
        {
          path: "/about/inner",
          element: <AboutInnerPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
