import React from 'react'

export default function TimelineEvent({ event }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-sm text-gray-500">{event.fecha}</div>
      <h4 className="font-semibold">{event.tipo}</h4>
      <p className="text-sm text-gray-700">{event.descripcion}</p>
    </div>
  )
}
