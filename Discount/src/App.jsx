import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Toolbar } from "@mui/material";

import Landing from "./pages/Landing";
import Calculator from "./pages/Calculator";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Toolbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;