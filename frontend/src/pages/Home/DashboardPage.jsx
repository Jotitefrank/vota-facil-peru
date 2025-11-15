import React from 'react'
import { Link } from 'react-router-dom'
import TimelineEvent from '../../components/electoral/TimelineEvent'
import BallotSimulator from '../../components/electoral/BallotSimulator'
import FeaturesSection from '../../components/home/FeaturesSection'

export default function DashboardPage({ calendario = [], candidatos = [], news = [] }) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-6 mb-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-6">
            Información <br /> Electoral <span className="text-orange-500">2026</span>
          </h2>
          <p className="text-lg mb-8 leading-relaxed max-w-xl">
            Tu plataforma integral para estar informado sobre el proceso electoral. Accede a información sobre candidatos, fechas clave, y recomendaciones de seguridad.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              to="/candidatos" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition duration-300 flex items-center gap-2"
            >
              Explorar Plataforma <span>→</span>
            </Link>
            <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded transition duration-300">
              Más información
            </button>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <FeaturesSection />

      {/* Cuenta regresiva */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Cuenta regresiva</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg">Falta X días para la elección (placeholder)</p>
        </div>
      </section>

      {/* Calendario Electoral */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Calendario Electoral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {calendario.map(evt => <TimelineEvent key={evt.id} event={evt} />)}
        </div>
      </section>

      {/* Simulador rápido */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Simulador rápido</h2>
        <BallotSimulator candidates={candidatos} />
      </section>

      {/* Noticias */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Noticias</h2>
        <div className="space-y-4">
          {news.map(n => (
            <a key={n.id} href={n.url} className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">{n.title}</p>
              <p className="text-xs text-gray-500 mt-2">{n.source}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
