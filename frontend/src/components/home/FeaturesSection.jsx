import React from 'react'

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: '📅',
      title: 'Calendario Electoral',
      description: 'Accede a todas las fechas importantes y hitos del proceso electoral 2026'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Agrupaciones Políticas',
      description: 'Conoce los candidatos, planes de gobierno y propuestas políticas'
    },
    {
      id: 3,
      icon: '📍',
      title: 'Ubicación de Votación',
      description: 'Encuentra tu centro de votación con geolocalización integrada'
    },
    {
      id: 4,
      icon: '📖',
      title: 'Educación Electoral',
      description: 'Tutoriales y guías sobre cómo participar en el proceso electoral'
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Recomendaciones',
      description: 'Información sobre seguridad y marco legal electoral'
    },
    {
      id: 6,
      icon: '📊',
      title: 'Voto Informado',
      description: 'Datos y análisis para tomar decisiones electorales informadas'
    }
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Características Principales</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para participar informadamente en el proceso electoral
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(feature => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
