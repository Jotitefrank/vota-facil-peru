import React from 'react'

export default function PollingPlaceMap({ place }) {
  if (!place) return <div className="bg-white p-4 rounded shadow">No hay información del local.</div>

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{place.name}</h3>
      <p className="text-sm text-gray-600">{place.address}</p>
      <div className="mt-3">
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500">Mapa (coords: {place.coords.lat}, {place.coords.lng})</div>
      </div>
    </div>
  )
}
