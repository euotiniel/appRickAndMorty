import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Characters from './pages/characters'
import Details from './pages/details'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/details/:id/rickandmorty" element={<Details />} />
      </Routes>
    </>
  )
}
