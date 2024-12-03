import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout'; 
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
