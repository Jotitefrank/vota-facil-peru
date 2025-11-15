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
    <div className="bg-white p-6 rounded shadow">
      <div className="flex items-start">
        <img src={candidate.foto || '/assets/images/default.png'} alt={candidate.nombre} className="w-28 h-28 object-cover rounded mr-6" />
        <div>
          <h2 className="text-2xl font-bold">{candidate.nombre}</h2>
          <p className="text-sm text-gray-600">{candidate.cargo} — {candidate.region}</p>
          <p className="mt-3">{candidate.hojaVida}</p>
        </div>
      </div>

      <section className="mt-6">
        <h3 className="font-semibold">Propuestas</h3>
        <div className="mt-2">(Propuestas por sector — placeholder)</div>
      </section>
    </div>
  )
}
