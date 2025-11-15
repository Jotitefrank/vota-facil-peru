import React from 'react'
import { Link } from 'react-router-dom'

export default function CandidateCard({ candidate }) {
  return (
    <div className="bg-white p-4 rounded shadow flex">
      <img src={candidate.foto || '/assets/images/default.png'} alt={candidate.nombre} className="w-20 h-20 object-cover rounded mr-4" />
      <div>
        <h3 className="font-bold text-lg">{candidate.nombre}</h3>
        <p className="text-sm text-gray-600">{candidate.cargo} — {candidate.region}</p>
        <p className="text-sm mt-2">{candidate.hojaVida}</p>
        <Link to={`/candidatos/${candidate.id}`} className="text-blue-600 text-sm mt-2 inline-block">Ver perfil</Link>
      </div>
    </div>
  )
}
