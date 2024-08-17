import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRoute=createBrowserRouter([
  {
    path: "/",
    element:<Layout/>
  },
  {
    path: "/About",
    element:<About/>
  }
  ,
  {
    path: "/Contact",
    element:<Contact/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);


