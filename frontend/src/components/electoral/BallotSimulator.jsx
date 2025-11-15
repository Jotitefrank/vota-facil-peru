import React, { useState } from 'react'

export default function BallotSimulator({ candidates = [] }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Simulador de Cédula</h3>
      <form>
        {candidates.map(c => (
          <label key={c.id} className="flex items-center p-2 border rounded mb-2">
            <input type="radio" name="candidate" value={c.id} checked={selected===c.id} onChange={() => setSelected(c.id)} className="mr-2" />
            <img src={c.foto || '/assets/images/default.png'} alt="foto" className="w-12 h-12 object-cover rounded mr-2" />
            <div>
              <div className="font-semibold">{c.nombre}</div>
              <div className="text-xs text-gray-600">{c.cargo} — {c.region}</div>
            </div>
          </label>
        ))}
      </form>
      <div className="mt-3">
        <button disabled={!selected} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">Enviar voto simulado</button>
      </div>
    </div>
  )
}
