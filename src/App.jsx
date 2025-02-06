import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { PokemonProvider } from "./context/PokemonContext";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <PokemonProvider>
      <DashboardProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
          </Routes>
        </Router>
      </DashboardProvider>
    </PokemonProvider>
  );
}

export default App;
