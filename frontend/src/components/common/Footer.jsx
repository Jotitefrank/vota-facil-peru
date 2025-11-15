import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Contenido principal del footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Información general */}
          <div>
            <h3 className="text-xl font-bold mb-4">Plataforma Electoral</h3>
            <p className="text-gray-300 leading-relaxed">
              Tu fuente confiable de información para participar informadamente en el proceso electoral 2026.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition">Inicio</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition">Calendario</Link></li>
              <li><Link to="/candidatos" className="text-gray-300 hover:text-orange-500 transition">Candidatos</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Ayuda</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Tutoriales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Términos de Uso</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@electoral2026.gov" className="text-gray-300 hover:text-orange-500 transition">
                  info@electoral2026.gov
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:1800electoral" className="text-gray-300 hover:text-orange-500 transition">
                  1-800-ELECTORAL
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-300">Centro Electoral Nacional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-blue-800"></div>

        {/* Copyright y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-gray-400 text-sm">
            © 2025 Plataforma Electoral 2026. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-orange-500 transition text-xl">f</a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition text-xl">𝕏</a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition text-xl">📷</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
