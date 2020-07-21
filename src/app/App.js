import React from "react";
import "./App.sass";
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
