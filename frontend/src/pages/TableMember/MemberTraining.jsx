import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MemberTraining({ miembros }) {
  const navigate = useNavigate()

  const getInfoByTipo = (tipo) => miembros.find(m => m.tipo === tipo)?.contenido || 'Información no disponible'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón volver */}
      <div className="container mx-auto px-6 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-900 mb-8 transition"
        >
          <span>←</span>
          <span className="font-medium">Volver al inicio</span>
        </button>
      </div>

      {/* Encabezado */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">👥</span>
            <h1 className="text-4xl font-bold text-gray-900">Información para Miembros de Mesa</h1>
          </div>
          <p className="text-lg text-gray-600">
            Guía completa para cumplir tus responsabilidades electorales
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 py-12 space-y-8">
        {/* Calendario de Actividades */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Calendario de Actividades</h2>
          <p className="text-gray-700 leading-relaxed">{getInfoByTipo('Calendario actividades')}</p>
        </div>

        {/* Deberes de Instalación */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Deberes de Instalación</h2>
          <p className="text-gray-700 leading-relaxed">{getInfoByTipo('Deberes de instalación')}</p>
        </div>

        {/* Deberes de Sufragio */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🗳️ Deberes de Sufragio</h2>
          <p className="text-gray-700 leading-relaxed">{getInfoByTipo('Deberes de sufragio')}</p>
        </div>

        {/* Otros Deberes */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Otros Deberes</h2>
          <p className="text-gray-700 leading-relaxed">{getInfoByTipo('Otros deberes')}</p>
        </div>
      </div>

      {/* Sección informativa */}
      <div className="bg-blue-50 border-t border-blue-200 py-12 mt-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recuerda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">⏰ Puntualidad</h3>
              <p className="text-gray-600">
                La puntualidad es fundamental para el correcto desarrollo del proceso electoral.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">😐 Neutralidad</h3>
              <p className="text-gray-600">
                Mantén absoluta neutralidad política durante todo el proceso.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Comunicación</h3>
              <p className="text-gray-600">
                Reporta cualquier incidencia inmediatamente a las autoridades competentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
