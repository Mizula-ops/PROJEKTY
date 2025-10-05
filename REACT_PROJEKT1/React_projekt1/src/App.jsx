//import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import TestSettings from "./pages/TestSettings";
import Home from "./pages/Home";
import YourData from "./pages/YourData";
import TestStart from "./pages/TestStart";
import TestEnd from './pages/TestEnd'
import AllTest from './pages/AllTests' 
import ScrollToTop from './components/ScrollToTop'; 
import './App.css'

function App(){

  return(
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="test-settings" element={<TestSettings/>}/>
      <Route path="your-data" element={<YourData/>}/>    
      <Route path="home" element={<Home/>}/> 
      <Route path="test-start" element={<TestStart/>}/>
      <Route path="test-end" element={<TestEnd/>}/>
      <Route path="all-tests" element={<AllTest/>}/>
      <Route path="*" element={<h1>404 - Nie znaleziono strony</h1>}/> 
      
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App