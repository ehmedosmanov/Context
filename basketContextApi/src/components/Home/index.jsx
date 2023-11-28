import React from "react";
import { useState } from "react";
import BasketSidebar from "../BasketSidebar";
import OurProducts from "../OurProducts";
import "./index.scss";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <OurProducts handleToggle ={handleToggle}/>
      <BasketSidebar isOpen ={isOpen}/>
    </>
  );
};

export default Home;
