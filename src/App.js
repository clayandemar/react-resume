import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutMe, Projects } from "./pages";
import { Header, Wrapper, Footer } from "./components";



import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

function App() {
  return (
 
      <Wrapper>
        <Header />
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
        <Footer />
      </Wrapper>

  );
}

export default App;
