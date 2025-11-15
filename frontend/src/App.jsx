import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [onpeDatasets, setOnpeDatasets] = useState('')
  const [jneDatasets, setJneDatasets] = useState('')
  const [electoralNews, setElectoralNews] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/election/onpe/datasets').then(r => r.text()).then(setOnpeDatasets).catch(console.error)
    fetch('http://localhost:8080/api/election/jne/datasets').then(r => r.text()).then(setJneDatasets).catch(console.error)
    fetch('http://localhost:8080/api/news/electoral').then(r => r.json()).then(setElectoralNews).catch(console.error)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 pt-20">
        <h1 id="inicio" className="text-4xl font-bold text-center mb-8 text-blue-600">Vota Fácil Perú</h1>

       <section id="onpe" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Datos ONPE</h2>
         <div className="bg-white p-4 rounded shadow">
           <pre>{onpeDatasets || 'Cargando...'}</pre>
         </div>
       </section>

        <section id="jne" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Datos JNE</h2>
         <div className="bg-white p-4 rounded shadow">
           <pre>{jneDatasets || 'Cargando...'}</pre>
         </div>
       </section>

        <section id="news" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Noticias Electorales</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {electoralNews.length > 0 ? electoralNews.map((news, index) => (
             <div key={index} className="bg-white p-4 rounded shadow">
               <p>{news}</p>
             </div>
           )) : <p>Cargando noticias...</p>}
         </div>
       </section>
      </div>
    </div>
  )
}

export default App