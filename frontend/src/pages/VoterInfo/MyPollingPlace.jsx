import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyPollingPlace() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('ubicacion')
  const [dni, setDni] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = () => {
    // Simulamos una búsqueda
    if (dni.trim()) {
      setSearchResult({
        centro: 'Escuela Primaria Central',
        direccion: 'Avenida Principal 123',
        mesa: '005',
        salon: 'Salón 3',
        hora: '8:00 AM - 5:00 PM',
        telefono: '+51 1 2345-6789'
      })
    }
  }

  const securityTips = [
    {
      icon: '🪪',
      title: 'Lleva tu DNI',
      description: 'Es obligatorio presentar tu documento de identidad al votar. Asegúrate de llevarlo contigo.'
    },
    {
      icon: '⏰',
      title: 'Llega con tiempo',
      description: 'Presenta 30 minutos antes de tu hora de votación para evitar filas largas.'
    },
    {
      icon: '📍',
      title: 'Localiza tu centro',
      description: 'Usa esta plataforma para ubicar tu centro de votación con anticipación.'
    },
    {
      icon: '🚫',
      title: 'No se permite fotografías',
      description: 'La toma de fotografías dentro del local de votación está prohibida por ley.'
    },
    {
      icon: '🗳️',
      title: 'Voto secreto',
      description: 'Tu voto es secreto y confidencial. Nadie puede obligarte a revelar por quién votaste.'
    },
    {
      icon: '✋',
      title: 'Rechaza presiones',
      description: 'Si alguien intenta presionarte o intimidarte, denuncia ante las autoridades electorales.'
    }
  ]

  const tutorials = [
    {
      step: 1,
      title: 'Regístrate en el padrón electoral',
      description: 'Verifica que tu nombre aparezca en el padrón electoral. Puedes consultarlo en la web del JNE.'
    },
    {
      step: 2,
      title: 'Busca tu centro de votación',
      description: 'Ingresa tu DNI en esta plataforma para encontrar dónde te corresponde votar.'
    },
    {
      step: 3,
      title: 'Lleva la documentación',
      description: 'Asegúrate de llevar tu DNI original. No se aceptan fotocopias ni documentos vencidos.'
    },
    {
      step: 4,
      title: 'Llega con anticipación',
      description: 'Presenta 30 minutos antes de tu hora asignada para evitar inconvenientes.'
    },
    {
      step: 5,
      title: 'Emite tu voto',
      description: 'Marca tu voto, verifica la papeleta y deposítala en la urna. Tu voto es secreto.'
    },
    {
      step: 6,
      title: 'Solicita constancia',
      description: 'Al salir, puedes solicitar una constancia de votación a los miembros de mesa.'
    }
  ]

  const tabs = [
    { id: 'ubicacion', label: '📍 Ubicación', icon: '📍' },
    { id: 'seguridad', label: '🛡️ Seguridad', icon: '🛡️' },
    { id: 'tutorial', label: '📚 Tutorial', icon: '📚' }
  ]

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Información para Electores</h1>
          <p className="text-lg text-gray-600">
            Todo lo que necesitas saber para ejercer tu derecho al voto
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold border-b-2 transition duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 py-12">
        {/* TAB: Ubicación */}
        {activeTab === 'ubicacion' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ubica tu Centro de Votación</h2>
            <p className="text-gray-600 mb-6">Ingresa tu información para encontrar tu mesa</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Número de Cédula</label>
                <input
                  type="text"
                  placeholder="Ingresa tu número de cédula"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
              >
                Buscar Centro de Votación
              </button>

              {searchResult && (
                <div className="bg-gray-100 rounded-lg p-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">•</span>
                    <div>
                      <p className="font-semibold text-gray-900">Centro: {searchResult.centro}</p>
                      <p className="text-gray-600 text-sm">{searchResult.direccion}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">•</span>
                    <div>
                      <p className="font-semibold text-gray-900">Mesa: {searchResult.mesa} - {searchResult.salon}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">•</span>
                    <div>
                      <p className="font-semibold text-gray-900">Horario: {searchResult.hora}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">•</span>
                    <div>
                      <p className="font-semibold text-gray-900">Contacto: {searchResult.telefono}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB: Seguridad */}
        {activeTab === 'seguridad' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recomendaciones de Seguridad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: Tutorial */}
        {activeTab === 'tutorial' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">¿Cómo votar?</h2>
            <div className="space-y-6">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="flex gap-6 bg-white rounded-lg shadow-md p-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white font-bold rounded-full">
                      {tutorial.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600">{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sección de preguntas frecuentes */}
      <div className="bg-blue-50 border-t border-blue-200 py-12 mt-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">¿Puedo votar si perdí mi DNI?</h3>
              <p className="text-gray-600">
                No, es obligatorio presentar tu DNI original. Contacta a RENIEC para obtener un duplicado.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">¿Qué pasa si no puedo votar?</h3>
              <p className="text-gray-600">
                Debes comunicarte con la ONPE para justificar tu inasistencia antes de la fecha de elecciones.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">¿Puedo votar fuera de mi mesa?</h3>
              <p className="text-gray-600">
                No, debes votar en la mesa asignada según tu padrón electoral.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">¿Hay multa por no votar?</h3>
              <p className="text-gray-600">
                Sí, existe una multa administrativo por cada elección a la que no asistas sin justificación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
