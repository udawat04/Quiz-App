
import React, { useState } from "react";
import Sidebar from '../Components/Sidebar'
import MainScreen from '../Components/MainScreen'

const HomePage = () => {
    const [isOpen, setisOpen] = useState(false);
    

    const toggleSidebar = () => {
      setisOpen(!isOpen);
    };
    console.log(isOpen,"<<<");
  return (
    <div className="flex h-screen">
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <MainScreen />
    </div>
  );
}

export default HomePage