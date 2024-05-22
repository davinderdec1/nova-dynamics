import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

export default function App() {
 

  return (
    <BrowserRouter >
    <Routes>
    <Route index element={<Home />} />
    <Route path="About" element={<About />} />

    </Routes>
    </BrowserRouter>
    
  )

}


