import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow mb-6">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Vota Fácil Perú</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link to="/candidatos" className="text-gray-700 hover:text-blue-600">Candidatos</Link>
          <Link to="/votante" className="text-gray-700 hover:text-blue-600">Dónde voto</Link>
          <Link to="/miembros" className="text-gray-700 hover:text-blue-600">Miembros de Mesa</Link>
        </nav>
      </div>
    </header>
  )
}
