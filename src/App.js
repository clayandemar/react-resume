import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutMe, Projects } from "./pages";
import { Header, Wrapper, Footer } from "./components"
import image from "./components/images/Clay 2.jpg"


import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Analytics" element={<AboutMe />} />
            <Route path="/Transactions" element={<Projects />} />
          </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
