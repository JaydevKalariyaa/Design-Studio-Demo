import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import DesignStudio from "./pages/DesignStudio";
import CanvaIntegration from "./pages/Canva";
// import Canva from "./pages/Canva";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignStudio />} />
        <Route path="/canva" element={<CanvaIntegration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
