import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCandidateById } from '../../services/dataService'

export default function CandidateDetail() {
  const { id } = useParams()
  const [candidate, setCandidate] = useState(null)

  useEffect(() => {
    let mounted = true
    getCandidateById(id).then(c => { if (mounted) setCandidate(c) }).catch(console.error)
    return () => { mounted = false }
  }, [id])

  if (!candidate) return <div className="bg-white p-4 rounded shadow">Cargando...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón volver */}
      <div className="container mx-auto px-6 py-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-900 mb-8 transition"
        >
          <span>←</span>
          <span className="font-medium">Volver</span>
        </button>
      </div>

      <div className="container mx-auto px-6 pb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{candidate.nombre}</h1>
              <p className="text-lg text-blue-900 font-semibold mb-1">{candidate.cargo} — {candidate.region}</p>
              <p className="text-gray-600 mb-4">{candidate.agrupacion ? candidate.agrupacion.nombre : 'Independiente'}</p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Hoja de Vida</h2>
              <p className="text-gray-700 leading-relaxed">{candidate.hojaVida}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Actividades y Experiencia</h2>
              <p className="text-gray-700 leading-relaxed">{candidate.actividades}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Propuestas Principales</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">{candidate.propuestas}</p>
              </div>
            </section>

            {candidate.agrupacion && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Plan de Gobierno de {candidate.agrupacion.nombre}</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{candidate.agrupacion.planGobierno}</p>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
