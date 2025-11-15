const USE_LOCAL = (import.meta.env.VITE_USE_LOCAL === 'true') || (import.meta.env.VITE_USE_LOCAL == null);

export async function fetchAllData() {
  if (USE_LOCAL) {
    const res = await fetch('/data/mockData.json');
    if (!res.ok) throw new Error('Failed to load mock data');
    return res.json();
  }

  // Fallback to API endpoints (backend must expose these)
  const [calendarioRes, agrupRes, candRes, electRes, miembrosRes] = await Promise.all([
    fetch('/api/calendario'),
    fetch('/api/agrupaciones'),
    fetch('/api/candidatos'),
    fetch('/api/electores'),
    fetch('/api/miembros-mesa')
  ]);

  if (!calendarioRes.ok || !agrupRes.ok || !candRes.ok) {
    throw new Error('API fetch failed');
  }

  const [calendario, agrupaciones, candidatos, electores, miembros] = await Promise.all([
    calendarioRes.json(), agrupRes.json(), candRes.json(), electRes.json(), miembrosRes.json()
  ]);

  return { calendario, agrupaciones, candidatos, electores, miembros };
}

export async function getCandidates() {
  const d = await fetchAllData();
  return d.candidatos || [];
}

export async function getCandidateById(id) {
  const cands = await getCandidates();
  return cands.find(c => c.id === id);
}

export async function getPollingPlaceByDni(dni) {
  const d = await fetchAllData();
  // This assumes mockData contains pollingPlaces keyed by elector info; adapt as needed
  return (d.pollingPlaces || []).find(p => (p.dni === dni) || (p.mesas && p.mesas.some(m=>m.mesa === dni)));
}

export default {
  fetchAllData, getCandidates, getCandidateById, getPollingPlaceByDni
};
