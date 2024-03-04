import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/Allroutes";
function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
