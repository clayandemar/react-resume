import React from 'react';
// Pages
import Projects from '../src/pages/Projects';
// Components
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
//CSS
import './App.css';
//Font

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";





function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Header />
      <Profile />
      <Footer />

    </div>
  );
}

export default App;
