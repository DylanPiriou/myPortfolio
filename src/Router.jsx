import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/*" element={<NotFound/>} />
    </Routes>
  )
}
