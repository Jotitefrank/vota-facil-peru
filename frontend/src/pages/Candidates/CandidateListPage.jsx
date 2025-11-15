import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CandidateListPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('presidenciales')

  const candidates = {
    presidenciales: [
      {
        id: 1,
        name: 'Candidato Presidencial A',
        party: 'Movimiento Azul',
        color: 'bg-blue-600',
        proposals: [
          'Educación gratuita',
          'Empleo digno',
          'Infraestructura'
        ]
      },
      {
        id: 2,
        name: 'Candidato Presidencial B',
        party: 'Coalición Naranja',
        color: 'bg-orange-500',
        proposals: [
          'Salud universal',
          'Seguridad ciudadana',
          'Economía'
        ]
      },
      {
        id: 3,
        name: 'Candidato Presidencial C',
        party: 'Frente Verde',
        color: 'bg-green-600',
        proposals: [
          'Medio ambiente',
          'Justicia social',
          'Desarrollo sostenible'
        ]
      }
    ],
    diputados: [
      {
        id: 4,
        name: 'Candidato Diputado 1',
        party: 'Movimiento Azul',
        color: 'bg-blue-600',
        proposals: [
          'Legislación laboral',
          'Transparencia',
          'Participación ciudadana'
        ]
      },
      {
        id: 5,
        name: 'Candidato Diputado 2',
        party: 'Coalición Naranja',
        color: 'bg-orange-500',
        proposals: [
          'Reforma tributaria',
          'Desarrollo local',
          'Innovación'
        ]
      }
    ],
    senadores: [
      {
        id: 6,
        name: 'Candidato Senador 1',
        party: 'Frente Verde',
        color: 'bg-green-600',
        proposals: [
          'Protección ambiental',
          'Derechos humanos',
          'Autonomías'
        ]
      },
      {
        id: 7,
        name: 'Candidato Senador 2',
        party: 'Movimiento Azul',
        color: 'bg-blue-600',
        proposals: [
          'Institucionalidad',
          'Equidad regional',
          'Integración'
        ]
      }
    ]
  }

  const tabs = [
    { id: 'presidenciales', label: 'Presidenciales' },
    { id: 'diputados', label: 'Diputados' },
    { id: 'senadores', label: 'Senadores' }
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
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">👥</span>
            <h1 className="text-4xl font-bold text-gray-900">Candidatos y Agrupaciones Políticas</h1>
          </div>
          <p className="text-lg text-gray-600">
            Conoce a los candidatos y sus propuestas para 2026
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates[activeTab].map(candidate => (
            <div
              key={candidate.id}
              onClick={() => navigate(`/candidatos/${candidate.id}`)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              {/* Header con color de partido */}
              <div className={`${candidate.color} h-24 flex items-center justify-center`}>
                <span className="text-5xl">🗳️</span>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{candidate.name}</h3>
                <p className="text-blue-900 font-semibold mb-4">{candidate.party}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Propuestas principales:</p>
                  <ul className="space-y-2">
                    {candidate.proposals.map((proposal, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-blue-900 mt-1">•</span>
                        <span>{proposal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Ver más detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de información */}
      <div className="bg-blue-50 border-t border-blue-200 py-12 mt-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Cómo usar esta sección?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Compara propuestas</h3>
              <p className="text-gray-600">
                Revisa las propuestas de diferentes candidatos para tomar una decisión informada sobre tu voto.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Conoce sus planes</h3>
              <p className="text-gray-600">
                Accede a información detallada sobre los planes de gobierno y trayectoria de cada candidato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

