import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";



const App = () => {

  return (
    <>
      <div className="flex  bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
