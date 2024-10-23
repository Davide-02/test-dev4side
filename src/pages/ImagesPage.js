import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ImagesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="header2">
        <FontAwesomeIcon 
          icon={faBars} 
          className="menu-icon" 
          onClick={toggleSidebar} 
        />
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className={`content ${sidebarOpen ? "open" : ""}`}>
        Immagini
      </div>
    </div>
  );
};

export default ImagesPage;
