import React, { useEffect, useState } from 'react'
import CandidateCard from '../../components/electoral/CandidateCard'
import { getCandidates } from '../../services/dataService'

export default function CandidateListPage() {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    let mounted = true
    getCandidates().then(c => { if (mounted) setCandidates(c) }).catch(console.error)
    return () => { mounted = false }
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Candidatos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map(c => <CandidateCard key={c.id} candidate={c} />)}
      </div>
    </div>
  )
}
