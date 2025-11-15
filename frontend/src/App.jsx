import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [calendario, setCalendario] = useState([])
  const [agrupaciones, setAgrupaciones] = useState([])
  const [candidatos, setCandidatos] = useState([])
  const [electores, setElectores] = useState([])
  const [miembros, setMiembros] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/calendario').then(r => r.json()).then(setCalendario)
    fetch('http://localhost:8080/api/agrupaciones').then(r => r.json()).then(setAgrupaciones)
    fetch('http://localhost:8080/api/candidatos').then(r => r.json()).then(setCandidatos)
    fetch('http://localhost:8080/api/electores').then(r => r.json()).then(setElectores)
    fetch('http://localhost:8080/api/miembros-mesa').then(r => r.json()).then(setMiembros)
  }, [])

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Vota Fácil Perú</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Calendario Electoral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {calendario.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{item.tipo}</h3>
              <p>{item.fecha}</p>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agrupaciones Políticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agrupaciones.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{item.nombre}</h3>
              <p>{item.planGobierno}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Candidatos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {candidatos.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{item.nombre}</h3>
              <p>{item.cargo} - {item.region}</p>
              <p className="text-sm">{item.hojaVida}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información para Electores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {electores.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{item.tipo}</h3>
              <p>{item.contenido}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información para Miembros de Mesa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {miembros.map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{item.tipo}</h3>
              <p>{item.contenido}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App