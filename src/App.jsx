import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import DesignStudio from "./pages/DesignStudio";
import CanvaIntegration from "./pages/Canva";
import GrapesJsStudio from "./pages/grapejsSdk";
 import GrapesJsStudioNew from "./pages/newGrapesjs";
// import Canva from "./pages/Canva";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignStudio />} />
        <Route path="/grapejs" element={<GrapesJsStudio />} />
        <Route path="/canva" element={<CanvaIntegration />} />
        <Route path="/grapejs-new" element={<GrapesJsStudioNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
