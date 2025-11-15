import React, { useState } from 'react'
import { getPollingPlaceByDni } from '../../services/dataService'
import PollingPlaceMap from '../../components/maps/PollingPlaceMap'

export default function MyPollingPlace() {
  const [dni, setDni] = useState('')
  const [place, setPlace] = useState(null)

  async function lookup() {
    try {
      const p = await getPollingPlaceByDni(dni)
      setPlace(p)
    } catch (e) {
      console.error(e)
      setPlace(null)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">¿Dónde voto?</h2>
      <div className="mb-4">
        <input value={dni} onChange={e=>setDni(e.target.value)} placeholder="Ingrese su DNI" className="p-2 border rounded mr-2" />
        <button onClick={lookup} className="px-3 py-2 bg-blue-600 text-white rounded">Buscar</button>
      </div>

      {place ? <PollingPlaceMap place={place} /> : <div className="text-sm text-gray-600">Ingresa tu DNI para ver el local de votación.</div>}
    </div>
  )
}
