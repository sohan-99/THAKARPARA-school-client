// import React from 'react';


import { Outlet } from "react-router-dom";
import Header from "../components/home/Header";
import Navbar from "../components/home/Navber";
import NewsTicker from "../components/home/NewsTicker";
import  Footer from "../components/home/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <NewsTicker />
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Layout;