import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
