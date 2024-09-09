import React from "react";
import Home from "./components/page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Jobs from "./components/page/Jobs";
import Browser from "./components/page/Browser";
import Profile from "./components/page/Profile";
import Details from "./components/page/Details";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/details",
      element: <Details />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
