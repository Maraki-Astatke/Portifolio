import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './component/Header';
import Hero from './component/Hero';
import Service from './component/Service';
import Skills from './component/Skills';
import ContactPage from './component/Contact';
import WebDevelopmentPage from './component/WebDevelopmentPage'; // Import your service pages
import UIUXDesignPage from './component/UIUXDesignPage';
import GraphicDesignPage from './component/GraphicDesignPage';
import CertificatesPage from './component/Certifacte'; // Import CertificatesPage

function App() {
  return (
    <div className="App bg-black text-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Service />
            <Skills />
            <ContactPage />
          </>
        } /> {/* Main page with all components */}
        
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/ui-ux-design" element={<UIUXDesignPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/certificates" element={<CertificatesPage />} /> {/* Added route for CertificatesPage */}
      </Routes>
    </div>
  );
}

export default App;