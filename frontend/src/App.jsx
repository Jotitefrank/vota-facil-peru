import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import DashboardPage from './pages/Home/DashboardPage'
import CandidateListPage from './pages/Candidates/CandidateListPage'
import CandidateDetail from './pages/Candidates/CandidateDetail'
import MyPollingPlace from './pages/VoterInfo/MyPollingPlace'
import MemberTraining from './pages/TableMember/MemberTraining'
import CalendarDetailPage from './pages/Calendar/CalendarDetailPage'
import ElectoralInfoPage from './pages/Electoral/ElectoralInfoPage'
import { fetchAllData } from './services/dataService'

function App() {
  const [calendario, setCalendario] = useState([])
  const [agrupaciones, setAgrupaciones] = useState([])
  const [candidatos, setCandidatos] = useState([])
  const [electores, setElectores] = useState([])
  const [miembros, setMiembros] = useState([])

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const data = await fetchAllData()
        if (!mounted) return
        setCalendario(data.calendario || [])
        setAgrupaciones(data.agrupaciones || [])
        setCandidatos(data.candidatos || [])
        setElectores(data.electores || [])
        setMiembros(data.miembros || [])
      } catch (e) {
        console.error('Error cargando datos:', e)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="container mx-auto p-4 flex-1">
          <Routes>
            <Route path="/" element={<DashboardPage calendario={calendario} candidatos={candidatos} news={[]} />} />
            <Route path="/calendario" element={<CalendarDetailPage calendario={calendario} />} />
            <Route path="/candidatos" element={<CandidateListPage candidatos={candidatos} agrupaciones={agrupaciones} />} />
            <Route path="/candidatos/:id" element={<CandidateDetail />} />
            <Route path="/votante" element={<MyPollingPlace electores={electores} />} />
            <Route path="/miembros" element={<MemberTraining miembros={miembros} />} />
            <Route path="/electoral" element={<ElectoralInfoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App