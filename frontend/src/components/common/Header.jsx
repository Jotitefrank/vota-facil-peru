import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-orange-500">✓</span> ElectoralPlatforma
        </Link>
        <nav className="space-x-8 hidden md:flex">
          <Link to="/calendario" className="hover:text-orange-500 transition duration-300 font-medium">Calendario</Link>
          <Link to="/candidatos" className="hover:text-orange-500 transition duration-300 font-medium">Candidatos</Link>
          <Link to="/votante" className="hover:text-orange-500 transition duration-300 font-medium">Para Electores</Link>
          <Link to="/miembros" className="hover:text-orange-500 transition duration-300 font-medium">Para Miembros de Mesa</Link>
        </nav>
        <button className="bg-white text-blue-900 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition duration-300">
          Iniciar sesión
        </button>
      </div>
    </header>
  )
}
