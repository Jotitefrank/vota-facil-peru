import React from 'react'

const checklist = [
  'Presentarse temprano y firmar asistencia',
  'Verificar material de votación',
  'Instalar mesa y organizar electores',
  'Registrar incidencias y firmar actas'
]

export default function MemberTraining() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Entrenamiento - Miembro de Mesa</h2>
      <div className="bg-white p-4 rounded shadow">
        <ul className="list-disc pl-5 space-y-2">
          {checklist.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
      </div>
    </div>
  )
}
