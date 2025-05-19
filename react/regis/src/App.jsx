import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'

function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
