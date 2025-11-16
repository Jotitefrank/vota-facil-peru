import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CalendarDetailPage({ calendario }) {
  const navigate = useNavigate()

  const calendarEvents = calendario.map(event => ({
    id: event.id,
    date: event.fecha,
    title: event.tipo,
    description: event.descripcion,
    icon: event.tipo === 'Elecciones Generales' ? '🗳️' : event.tipo === 'Proceso Electoral' ? '📅' : '👥'
  })) || []

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
            <span className="text-4xl">📅</span>
            <h1 className="text-4xl font-bold text-gray-900">Calendario Electoral 2026</h1>
          </div>
          <p className="text-lg text-gray-600">
            Fechas importantes y hitos clave del proceso electoral
          </p>
        </div>
      </div>

      {/* Timeline de eventos */}
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-6">
          {calendarEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Línea conectora */}
              {index < calendarEvents.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-12 bg-blue-900 hidden lg:block"></div>
              )}

              {/* Tarjeta del evento */}
              <div className="flex gap-6 items-start">
                {/* Punto en la línea */}
                <div className="flex-shrink-0 mt-2">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white text-2xl">
                    {event.icon}
                  </div>
                </div>

                {/* Contenido del evento */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-blue-900 font-semibold text-lg">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección informativa */}
      <div className="bg-blue-50 border-t border-blue-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Información importante</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🗳️ Derecho al voto</h3>
              <p className="text-gray-600">
                Todos los ciudadanos peruanos mayores de 18 años tienen derecho y deber de votar en las elecciones generales.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📍 Dónde votar</h3>
              <p className="text-gray-600">
                Consulta tu centro de votación asignado mediante tu número de DNI en la sección "Para Electores".
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📚 Conoce candidatos</h3>
              <p className="text-gray-600">
                Revisa las propuestas políticas y planes de gobierno de todos los candidatos en "Candidatos".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
