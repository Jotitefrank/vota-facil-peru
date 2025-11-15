import React from 'react'
import TimelineEvent from '../../components/electoral/TimelineEvent'
import BallotSimulator from '../../components/electoral/BallotSimulator'

export default function DashboardPage({ calendario = [], candidatos = [], news = [] }) {
  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Cuenta regresiva</h2>
        <div className="bg-white p-4 rounded shadow">Falta X días para la elección (placeholder)</div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Calendario Electoral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {calendario.map(evt => <TimelineEvent key={evt.id} event={evt} />)}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Simulador rápido</h2>
        <BallotSimulator candidates={candidatos} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Noticias</h2>
        <div className="space-y-2">
          {news.map(n => (
            <a key={n.id} href={n.url} className="block bg-white p-3 rounded shadow">{n.title} <span className="text-xs text-gray-500">{n.source}</span></a>
          ))}
        </div>
      </section>
    </div>
  )
}
