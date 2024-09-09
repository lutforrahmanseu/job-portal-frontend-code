import React from "react";
import Home from "./components/page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

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
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
