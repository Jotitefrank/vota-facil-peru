import { useState, useEffect } from 'react'

const ElectoralInfoPage = () => {
    const [onpeData, setOnpeData] = useState([])
    const [jneData, setJneData] = useState([])
    const [elComercioData, setElComercioData] = useState([])
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    useEffect(() => {
        if (isOnline) {
            fetchData()
        } else {
            loadFromCache()
        }
    }, [isOnline])

    const fetchData = async () => {
        try {
            const [onpe, jne, elcomercio] = await Promise.all([
                fetch('http://localhost:8080/api/electoral/onpe'),
                fetch('http://localhost:8080/api/electoral/jne'),
                fetch('http://localhost:8080/api/electoral/elcomercio')
            ])
            const onpeJson = await onpe.json()
            const jneJson = await jne.json()
            const elComercioJson = await elcomercio.json()
            setOnpeData(onpeJson)
            setJneData(jneJson)
            setElComercioData(elComercioJson)
            // Cache
            localStorage.setItem('onpeData', JSON.stringify(onpeJson))
            localStorage.setItem('jneData', JSON.stringify(jneJson))
            localStorage.setItem('elComercioData', JSON.stringify(elComercioJson))
        } catch (error) {
            console.error('Error fetching data:', error)
            loadFromCache()
        }
    }

    const loadFromCache = () => {
        const cachedOnpe = localStorage.getItem('onpeData')
        const cachedJne = localStorage.getItem('jneData')
        const cachedElComercio = localStorage.getItem('elComercioData')
        if (cachedOnpe) setOnpeData(JSON.parse(cachedOnpe))
        if (cachedJne) setJneData(JSON.parse(cachedJne))
        if (cachedElComercio) setElComercioData(JSON.parse(cachedElComercio))
    }

    const redirectToSite = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Información Electoral</h1>
            {!isOnline && <p className="text-yellow-600">Estás offline. Mostrando datos en caché.</p>}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">ONPE</h2>
                <button onClick={() => redirectToSite('https://eg2026.onpe.gob.pe/')} className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">Ir a ONPE</button>
                <ul>
                    {onpeData.slice(0, 10).map((item, index) => (
                        <li key={index} className="mb-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">{item.title}</a>
                            {item.content && <p className="text-gray-700 text-sm mt-1">{item.content}</p>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">JNE</h2>
                <button onClick={() => redirectToSite('https://portal.jne.gob.pe/portal/')} className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">Ir a JNE</button>
                <ul>
                    {jneData.slice(0, 10).map((item, index) => (
                        <li key={index} className="mb-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">{item.title}</a>
                            {item.content && <p className="text-gray-700 text-sm mt-1">{item.content}</p>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">El Comercio</h2>
                <button onClick={() => redirectToSite('https://elcomercio.pe/buscar/Electoral+/todas/descendiente/?ref=ecr')} className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">Ir a El Comercio</button>
                <ul>
                    {elComercioData.slice(0, 10).map((item, index) => (
                        <li key={index} className="mb-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">{item.title}</a>
                            {item.content && <p className="text-gray-700 text-sm mt-1">{item.content}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ElectoralInfoPage